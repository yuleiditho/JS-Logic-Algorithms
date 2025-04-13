# JS- Lógica y Algoritmos
Este repositorio es una guía práctica para comprender y aplicar conceptos fundamentales de JS. 

## Clase 01. Intro a EMCAScript

- Módulos ES6
    - Organización del código en archivos independientes
    - `export` para exponer funcionalidades
    - `import` para consumir desde otros módulos

- Clases
    - Sintaxis más limpia que prototipos
    - Constructor para inicialización
    - Métodos como funciones en el prototipo

- Array Functions
    - Callbacks concisos en métodos de array
    - Sintaxis más limpia en funciones cortas

### Proyecto Práctico: [App Viajes](https://github.com/yuleiditho/JS-Logic-Algorithms/tree/main/01-Intro/appViajes)
![landing](/01-Intro/appViajes/assets/media/home.png) 

## Clase 02. Estructuras de Datos

Formas de organizar y almecenar datos para acceso y modificación eficiente

-   Estructuras Lineales:
    -   **Arrays**: Colección contigua de elementos
    -   **Pilas (LIFO)**: Last-In-First-Out, `push()`, `pop()`
    -   **Colas (FIFO)**: First-In-First-Out, `enqueue()`, `dequeue`
-   Estructuras No Lineales:
    -   **Árboles**: Jerarquías con nodos padre/hijo
    -   **Grafos**: Conjunto de nodos conectados por aristas
-   Estructuras de Datos Abstractas (ADT)
    -   **Diccionarios**: Pares clave-valor (Objetos JS)
    -   **Conjunto**: Colección de elementos únicos
    -   **Hash-Tables**: Mapeo rápido mediante función hash

### Proyecto Práctico [App Shopping List](https://github.com/yuleiditho/JS-Logic-Algorithms/tree/main/02-DataStructures/listaCompras)
![lading](/02-DataStructures/listaCompras/img/home.png)

## Clase 03. Array Methods


### Solución [Shop Online](https://github.com/yuleiditho/JS-Logic-Algorithms/tree/main/03-Array-Methods/shopOnline)

## Métodos Utilizados
- **map**: Para crear un arreglo con los nombres de los productos.
- **sort**: Para ordenar los productos alfabéticamente por nombre.
- **filter**: Para filtrar productos según condiciones específicas, como categoría o precio.
- **reduce**: Para calcular el costo total de los productos filtrados.

<details>
<summary><strong> Métodos de Arreglos </strong></summary>

### Métodos de Iteración
- **forEach()**: Ejecuta una función para cada elemento del arreglo.
- **map()**: Crea un nuevo arreglo transformando los elementos del original.

### Métodos de Transformación
- **filter()**: Crea un arreglo con elementos que cumplen una condición.
- **reduce() / reduceRight()**: Combina elementos del arreglo en un solo valor.

### Métodos de Ordenación y Reorganización
- **sort()**: Ordena los elementos del arreglo.
- **reverse()**: Invierte el orden del arreglo.

### Métodos de Búsqueda y Consulta
- **find() / findIndex()**: Encuentra elementos o sus índices según una condición.
- **includes()**: Comprueba si un elemento existe en el arreglo.
- **indexOf() / lastIndexOf()**: Busca la posición de un elemento.

### Métodos de Modificación
- **push() / pop()**: Añade o elimina elementos al final del arreglo.
- **shift() / unshift()**: Añade o elimina elementos al inicio del arreglo.
- **splice()**: Añade, elimina o reemplaza elementos en cualquier posición.

### Métodos de Copia y División
- **slice()**: Devuelve una porción del arreglo.
- **concat()**: Combina varios arreglos en uno solo.

### Métodos de Comprobación
- **every()**: Verifica si todos los elementos cumplen una condición.
- **some()**: Comprueba si al menos un elemento cumple una condición.

### Métodos de Conversión
- **join()**: Convierte el arreglo en una cadena de texto.
- **toString()**: Convierte el arreglo en una representación textual.

</details>

## Clase 4. Punteros

### Solución [Invitados](https://github.com/yuleiditho/JS-Logic-Algorithms/tree/main/04-Punteros/guestEvent)

Este proyecto resuelve el problema de encontrar pares de nombres en una lista que comparten la misma inicial, usando el patrón de dos punteros.

### Patrón de Dos Punteros
El **patrón de dos punteros** es una técnica poderosa y versátil que se utiliza comúnmente en problemas relacionados con arreglos o listas. Este enfoque emplea dos índices, llamados punteros, que recorren la estructura de datos para resolver problemas de manera eficiente.

Este patrón es especialmente útil en los siguientes escenarios:
- **Búsqueda eficiente**: Resolver problemas donde necesitas comparar o sumar elementos de una lista.
- **Recorrido bidireccional**: Procesar datos desde ambos extremos del arreglo.
- **Filtrado o agrupación de elementos**: Identificar o agrupar elementos que cumplen con una condición específica.
- Problemas frecuentes en algoritmos como:
  - Determinar si un arreglo es un palíndromo.
  - Encontrar pares de números con una suma específica.
  - Detectar subarreglos en listas.


