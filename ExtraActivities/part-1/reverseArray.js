//Escribe una función que tome un arreglo y lo devuelva invertido sin usar .reverse()
const array = [0,1,2,3,4,5];

function arrayInvertido(array){
    const narray = [];
    for(let i = array.length-1; i > 0; i--){
        narray.push(array[i]);
    }
    return narray;
}
console.log('Array original:', array, '\nArray Invertido:', arrayInvertido(array));