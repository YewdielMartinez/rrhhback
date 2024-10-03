const fs = require('fs');
const path = require('path');

// Directorio del proyecto donde se encuentran los archivos
const directory = './src'; // Cambia esto por la ruta de tu proyecto

// Función para corregir importaciones en un archivo
function correctImports(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error leyendo el archivo: ${filePath}`, err);
            return;
        }

        // Expresión regular para detectar rutas de importación relativas incorrectas
        // Puedes personalizar esta expresión según el tipo de errores
        const importRegex = /import\s+.*\s+from\s+['"](\..*)['"]/g;

        const correctedData = data.replace(importRegex, (match, captureGroup) => {
            // Reemplazar la ruta relativa incorrecta por una nueva
            // Ejemplo: convertir '../..' a la ruta correcta
            const correctedPath = path.normalize(captureGroup);
            return match.replace(captureGroup, correctedPath);
        });

        // Si hubo cambios, sobreescribir el archivo
        if (correctedData !== data) {
            fs.writeFile(filePath, correctedData, 'utf8', (err) => {
                if (err) {
                    console.error(`Error escribiendo en el archivo: ${filePath}`, err);
                } else {
                    console.log(`Importaciones corregidas en: ${filePath}`);
                }
            });
        }
    });
}

// Función para recorrer recursivamente los directorios y corregir importaciones en cada archivo .ts
function processDirectory(dir) {
    fs.readdir(dir, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error(`Error leyendo el directorio: ${dir}`, err);
            return;
        }

        files.forEach((file) => {
            const filePath = path.join(dir, file.name);

            if (file.isDirectory()) {
                // Si es un directorio, procesar recursivamente
                processDirectory(filePath);
            } else if (file.isFile() && file.name.endsWith('.ts')) {
                // Si es un archivo TypeScript, corregir importaciones
                correctImports(filePath);
            }
        });
    });
}

// Iniciar el proceso desde el directorio de src
processDirectory(directory);
