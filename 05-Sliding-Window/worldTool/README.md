# Slinding Window

Este proyecto implementa una función llamada `findLongestWord` que utiliza el concepto de **sliding window** para encontrar la palabra más larga en un texto. 

-   Cada palabra se considera una ventan delimitada por espacios
-   Las longitudes de estas ventanas se comprarn para determinar cuál es la más larga

## Lógica:
1. **Dividir el texto**: El texto se convierte a minúsculas usando `.toLowerCase()` y se divide en palabras usando `.split(' ')`

2. **Recorrer el arreglo de palabras:** Se utiliza un bucle `for`

3. **Comparar longitudes:** Cada palabra se compara con la más larga encontrada hasta ahora `(longestWord)`.

4. **Actualizar la palabra más larga:** Si la palabra actual es más larga, se almacena en la variable `longestWord`.

5. **Retornar el resultado:** Al finalizar el bucle, se retorna la palabra más larga encontrada.

## Costo Computacional

- **Temporal**: O(n)
- **Espacial**: O(n)
