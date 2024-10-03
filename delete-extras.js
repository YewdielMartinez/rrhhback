const fs = require('fs');
const path = require('path');

// Directorio del proyecto donde se encuentran los archivos
const directory = './src'; // Cambia esto según la estructura de tu proyecto

// Función para eliminar archivos .entity.ts que no empiezan con mayúscula
function removeNonCapitalizedEntityFiles(dir) {
    fs.readdir(dir, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error(`Error leyendo el directorio: ${dir}`, err);
            return;
        }

        files.forEach((file) => {
            const filePath = path.join(dir, file.name);

            if (file.isDirectory()) {
                // Si es un directorio, procesar recursivamente
                removeNonCapitalizedEntityFiles(filePath);
            } else if (file.isFile() && file.name.endsWith('.entity.ts')) {
                // Verificar si el primer carácter del nombre del archivo es mayúscula
                if (!/^[A-Z]/.test(file.name)) {
                    // Eliminar el archivo si no empieza con mayúscula
                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.error(`Error eliminando el archivo: ${filePath}`, err);
                        } else {
                            console.log(`Archivo eliminado: ${filePath}`);
                        }
                    });
                }
            }
        });
    });
}

// Iniciar el proceso desde el directorio de src
removeNonCapitalizedEntityFiles(directory);
