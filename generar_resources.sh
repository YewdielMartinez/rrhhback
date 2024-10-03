#!/bin/bash

# Ruta donde están las entidades generadas
ENTITY_PATH="./output/entities"

# Ruta donde se moverán los archivos .entity.ts
TARGET_PATH="./src"

# Iterar sobre cada archivo de entidad
for file in $ENTITY_PATH/*.ts
do
  # Extraer el nombre de la entidad sin la extensión
  entity_name=$(basename "$file" .ts)

  # Convertir el nombre de la entidad a minúsculas para el nombre de los módulos
  entity_lower=$(echo "$entity_name" | tr '[:upper:]' '[:lower:]')

  # Ejecutar los comandos de Nest CLI para generar módulo, servicio, controlador y DTOs
  nest g resource $entity_lower --no-spec

  sleep 2

  # Renombrar el archivo a NombreEntidad.entity.ts
  new_filename="${entity_name}.entity.ts"

  # Mover el archivo a la carpeta entities del recurso recién creado
  mv "$file" "$TARGET_PATH/$entity_lower/entities/$new_filename"
done
