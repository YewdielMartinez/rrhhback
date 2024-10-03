const fs = require('fs');
const path = require('path');

// Directorio del proyecto donde se encuentran los archivos
const directory = './src'; // Cambia esto según la estructura de tu proyecto

// Función para corregir barras invertidas en las importaciones de un archivo
function fixBackslashesInImports(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error leyendo el archivo: ${filePath}`, err);
            return;
        }

        // Expresión regular para detectar importaciones con barras invertidas
        const correctedData = data.replace(/from\s+['"]([^'"]*\\[^'"]*)['"]/g, (match, p1) => {
            const fixedPath = p1.replace(/\\/g, '/'); // Reemplaza las barras invertidas con barras normales
            return match.replace(p1, fixedPath);
        });

        // Si hubo cambios, sobreescribir el archivo
        if (correctedData !== data) {
            fs.writeFile(filePath, correctedData, 'utf8', (err) => {
                if (err) {
                    console.error(`Error escribiendo en el archivo: ${filePath}`, err);
                } else {
                    console.log(`Barras invertidas corregidas en: ${filePath}`);
                }
            });
        }
    });
}

// Función para recorrer recursivamente los directorios y corregir barras invertidas en importaciones
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
                // Si es un archivo TypeScript, corregir las importaciones
                fixBackslashesInImports(filePath);
            }
        });
    });
}

// Iniciar el proceso desde el directorio de src
processDirectory(directory);
