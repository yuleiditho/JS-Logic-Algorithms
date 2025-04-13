# Patrón de Dos Punteros

Este proyecto resuelve el problema de encontrar pares de nombres en una lista que comparten la misma inicial, usando el patrón de dos punteros.

## Cómo Funciona

1. Inicialización de punteros
    - El puntero `inicio` comienza en el primer elemento del arreglo.
    - El puntero `siguiente` comienza en el siguiente elemento (`inicio + 1`).

2. Comparación de iniciales
    - Verifica si las iniciales de los nombres en las posiciones `inicio` y `siguiente` son iguales utilizando `arr[inicio][0] === arr[siguiente][0]`.

3. Almacenar pares
    - Si las iniciales coinciden, el par se agrega al arreglo `pares`.

4. Avance de punteros
    - El puntero `siguiente` recorre los elementos a la derecha de `inicio`.
    - Una vez que `siguiente` ha terminado, `inicio` avanza al siguiente elemento.

---

## Complejidad

- **Complejidad temporal:** O(n²) en el peor caso, ya que por cada posición del puntero `inicio`, el puntero `siguiente` recorre el resto del arreglo.


