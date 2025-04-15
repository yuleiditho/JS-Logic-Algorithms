## Encontrar el Máximo en un Arreglo usando Divide y Vencerás

Este programa utiliza el paradigma de **divide y vencerás** para encontrar el número máximo en un arreglo de números. Divide el arreglo en mitades, resuelve cada mitad recursivamente para encontrar el máximo en esa parte y finalmente combina los resultados al comparar los máximos obtenidos.

---

## Lógica

1. **Caso Base**
El programa detiene la recursión cuando el arreglo tiene un solo elemento, porque ese elemento es el máximo. Este caso base asegura que la recursión no se repite infinitamente.

```javascript
if (arr.length === 1) {
    return arr[0]; // Ese único elemento es el máximo.
}
```

2. **Dividir**
El arreglo se divide en dos mitades. Esto simplifica el problema al reducir su tamaño en cada llamada recursiva:
    - La primera mitad contiene los elementos desde el inicio hasta el punto medio.
    - La segunda mitad contiene los elementos desde el punto medio hasta el final.

```javascript
const mid = Math.floor(arr.length / 2);
const left = arr.slice(0, mid); // Primera mitad
const right = arr.slice(mid);  // Segunda mitad
```

3. **Resolver**
Se llama a la función de manera recursiva para obtener el máximo de cada mitad. Esta fase aprovecha la recursión para seguir dividiendo el arreglo hasta llegar al caso base:

```javascript
const leftMax = findMax(left);  // Buscar el máximo en la primera mitad
const rightMax = findMax(right); // Buscar el máximo en la segunda mitad
```

4. **Combinar**
Una vez que se obtienen los máximos de ambas mitades, los comparamos usando `Math.max` para encontrar el máximo global:

```javascript
return Math.max(leftMax, rightMax);
```


### Costo Computacional

1. **Complejidad Temporal**:
    - La recursión divide el arreglo en mitades `log₂(n)` veces
    - En cada nivel de división, se procesan todos los elementos.
    - **Complejidad total:** `O(n log n)`

2. **Complejidad Espacial**:
    - Cada llamada recursiva ocupa espacio en la pila de ejecución.
    - La profundidad máxima de recursión es `log₂(n)`.
    - **Complejidad espacial:** `O(log n)`