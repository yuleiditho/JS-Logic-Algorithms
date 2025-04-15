function findMax(arr) {
    //Caso base: Si el arreglo tiene solo un elemento, ese es el máximo
    if(arr.length === 1){
        return arr[0];
    }
    
    //Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid); // Primera mitad
    const right = arr.slice(mid);  // Segunda mitad

    //Llamada recursiva para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    //Combinar las soluciones comparando los máximos
    return Math.max(leftMax, rightMax);
}
// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10

