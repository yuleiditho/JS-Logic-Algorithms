//Dado un arreglo de números desordenado, ordénalos de menor a mayor usando sort y una función
const numbers = [100,1,2,3,4,5,9,0];

const ordenarArray = (array) => array.sort((a,b) => a-b);

console.log('Array Ordenado:', ordenarArray(numbers));


