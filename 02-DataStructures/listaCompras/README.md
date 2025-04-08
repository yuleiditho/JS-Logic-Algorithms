# Shopping List
Este proyecto implementa estructuras de datos básicas, aplicadas en una lista de compras interactiva.

## Uso Básico
1. **Usuario agrega producto**:
    - Se valida el departamento (dropdown de selección en el formulario).
    - Se crea un objeto `Producto` y se guarda en el array `listaProductos`.

2. **Usuario elimina producto**:
    - FIFO: Se busca y elimina el producto por nombre.
    - LIFO: Se elimina el último producto agregado (pop).

3. **Renderizado**: El array `listaProductos` se recorre para mostrar los elementos en el DOM.

![lading](/02-DataStructures/listaCompras/img/home.png)

## Estructura:
-   `app.js`: Coordina toda la aplicación
-   `Producto.js`: Modelo de producto
-   `Departamento.js`: Lista de departamentos disponibles
-   `GestorLista.js`: Gestiona la lista de compras 
-   `main.js`: Demo inicial