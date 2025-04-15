# Gestor de Notas en Node.js

Un programa para administrar notas almacenadas en formato JSON mediante la línea de comandos.

## Requisitos del sistema
- Node.js 
- Permisos de lectura/escritura en el directorio

## Consideraciones importantes
- Los títulos de las notas deben ser únicos
- El archivo se crea automáticamente al agregar la primera nota
- No se pierden datos al agregar nuevas notas (se preserva el contenido existente)


## Características principales

- **Funcionalidad CRUD básica**:
  - Crear nuevas notas
  - Leer y listar todas las notas: 
  - Eliminar notas existentes
- **Almacenamiento persistente**: Los datos se guardan en el archivo `notas.json`
- **Operaciones sincrónicas**: Usa los métodos sync de fs para operaciones de archivo

## Estructura de datos
El archivo `notas.json` almacena un array de objetos con este formato: 
```json
[
  {
    "titulo": "Titulo de ejemplo",
    "contenido": "Contenido de ejemplo"
  }
]
```

## Implementación técnica

### Lectura de datos
- Verifica si el archivo existe con `fs.existsSync()`
- Lee el contenido con `fs.readFileSync()`
- Parsea el JSON con `JSON.parse()`

### Escritura de datos
- Convierte el array a JSON con `JSON.stringify()`
- Escribe en el archivo con `fs.writeFileSync()`

### Manejo de notas
- **Agregar**: Push al array existente
- **Eliminar**: Filtrado del array por título



