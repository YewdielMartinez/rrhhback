const fs = require('fs');
const path = require('path');

// Directorio del proyecto donde se encuentran los archivos
const directory = './src'; // Cambia esto según la estructura de tu proyecto

// Función para eliminar el ".ts" de las importaciones
function removeTsExtensionInImports(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error leyendo el archivo: ${filePath}`, err);
            return;
        }

        // Expresión regular para detectar importaciones que terminan con .ts
        const correctedData = data.replace(/from\s+['"]([^'"]*\.entity)\.ts['"]/g, (match, p1) => {
            // Retorna el match sin la extensión .ts
            return match.replace(`${p1}.ts`, p1);
        });

        // Si hubo cambios, sobreescribir el archivo
        if (correctedData !== data) {
            fs.writeFile(filePath, correctedData, 'utf8', (err) => {
                if (err) {
                    console.error(`Error escribiendo en el archivo: ${filePath}`, err);
                } else {
                    console.log(`Extensión .ts eliminada en: ${filePath}`);
                }
            });
        }
    });
}

// Función para recorrer recursivamente los directorios y eliminar la extensión .ts de las importaciones
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
                // Si es un archivo TypeScript, eliminar la extensión .ts de las importaciones
                removeTsExtensionInImports(filePath);
            }
        });
    });
}

// Iniciar el proceso desde el directorio de src
processDirectory(directory);
