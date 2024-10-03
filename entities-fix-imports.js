const fs = require('fs');
const path = require('path');

// Directorio del proyecto donde se encuentran los archivos
const directory = './src'; // Cambia esto según la estructura de tu proyecto

// Almacén de rutas de entidades encontradas
const entityPaths = {};

// Función para escanear y almacenar rutas de archivos .entity.ts
function scanForEntities(dir) {
    fs.readdir(dir, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error(`Error leyendo el directorio: ${dir}`, err);
            return;
        }

        files.forEach((file) => {
            const filePath = path.join(dir, file.name);

            if (file.isDirectory()) {
                // Si es un directorio, procesar recursivamente
                scanForEntities(filePath);
            } else if (file.isFile() && file.name.endsWith('.entity.ts')) {
                // Si es un archivo .entity.ts, guardar su ruta
                const entityName = path.basename(file.name, '.entity.ts'); // Nombre del archivo sin la extensión
                const relativePath = filePath.replace(/^src\//, 'src/'); // Ruta relativa desde src
                entityPaths[entityName] = relativePath;
            }
        });
    });
}

// Función para corregir importaciones en un archivo
function correctImports(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error leyendo el archivo: ${filePath}`, err);
            return;
        }

        let correctedData = data;
        let hasCorrections = false;

        // Buscar importaciones incorrectas usando los nombres de las entidades encontradas
        Object.keys(entityPaths).forEach((entityName) => {
            const incorrectImportRegex = new RegExp(`from\\s+['"]${entityName}['"]`, 'g');

            // Si hay coincidencias con el nombre de una entidad, reemplazar con la ruta correcta
            if (incorrectImportRegex.test(correctedData)) {
                const correctImportPath = entityPaths[entityName];
                correctedData = correctedData.replace(incorrectImportRegex, `from '${correctImportPath}'`);
                hasCorrections = true;
            }
        });

        // Si hubo correcciones, sobreescribir el archivo
        if (hasCorrections) {
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

// Escanear primero todas las entidades
scanForEntities(directory);

// Después de un pequeño retraso, procesar los archivos para corregir importaciones
setTimeout(() => {
    console.log('Rutas de entidades encontradas:', entityPaths);
    processDirectory(directory);
}, 1000);
