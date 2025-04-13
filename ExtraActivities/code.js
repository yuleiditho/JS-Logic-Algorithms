//Escribe una función que tome un arreglo y lo devuelva invertido sin usar .reverse()

const array = [0,1,2,3,4,5];

const arrayInverse = (array) =>{
    let  j = 0;
    const narray = [];
    for(let i = array.length-1; i >= 0; i--){
        narray[j] = array[i];
        j++;
    }
    return narray;
}

const arrayInverse2 = (array) =>{
    const narray = [];
    for(let i = array.length-1; i >= 0; i--){
        narray.push(array[i]);
    }
    return narray;
}

console.log('Array original:', array, '\nArray Invertido:',arrayInverse2(array));


//Dado un arreglo de números desordenado, ordénalos de menor a mayor usando sort y una función
const numbers = [100,1,2,3,4,5,9,0];

/* numbers.sort(function (a, b) {
    return a - b;
}); */

const ordenarArray = (array) =>{
    return array.sort((a,b) => a-b);
}

console.log("Array desordenado:", numbers, '\nArray Ordenado:', ordenarArray(numbers));


//Elimina los elementos duplicados de este arreglo sin usar Set.
const duplicados = [6, 1, 2, 2, 3, 4, 4, 5, 6, 6,];

const deleteDuplicate = (array) =>{
    const resultado = [];
    
    for(let elemento in array){
        if (!resultado.includes(array[elemento])){
            resultado.push(array[elemento]);
        }
    }

    return resultado;
}


const eliminarDuplicados = (array) =>{
    const resultado = [];
    
    for(let i in array){
        let alert = false;
        for(let j in resultado){
            if(array[i] === resultado[j]){
                alert = true;
                break;
            }
        }
        if(!alert){
            resultado.push(array[i]);
        }
    }

    return resultado;
}

const eliminaDuplicates= (array) =>{
    array = ordenarArray(array);
    const resultado = [];

    for(let i in array){
        if(i===0 || array[i] !== array[i-1]){
            resultado.push(array[i]);
        }
    }

    return resultado;
}

console.log('Sin duplicados', eliminaDuplicates(duplicados));


//Sin usar Math.max ni Math.min, encuentra el número mayor y menor de este arreglo
const arrayNumbers = [10, 2, 50, 4, 4, 1];

const numberMaxMin = (array) =>{
    if(array.length === 0)
        return 'Arreglo vacío';

    let max = array[0];
    let min = array[0];

    for(let i in array){
        if(array[i] > max){
            max = array[i];
        }
        if(array[i] < min){
            min = array[i];
        }
    }

    return { max, min};
}

const numMaxMin = numberMaxMin(arrayNumbers);
console.log('Arreglo:', arrayNumbers, `Máx: ${numMaxMin.max}, Min: ${numMaxMin.min}`);



//Escribe una función que determine si una palabra es palíndromo (se lee igual al derecho y al revés).
function compareArrays(value){
    let lowerCaseValue = value.toLowerCase().split(' ').join('');
    let reversedValue = '';

    lowerCaseValue.split('').forEach((char) => {
        reversedValue = char + reversedValue;
    });

    if(lowerCaseValue === reversedValue){
        return console.log("Es palíndromo:", value); 
    }else{
        return console.log("No es palíndromo:", value);
    }
}

function palindromo(array){
    let format = array.toLowerCase().split(' ').join('');
    let reverso = '';

    format.split('').forEach((char) =>{
        reverso = char + reverso;
    });

    if(format === reverso){
        return `Es palíndromo: ${array}`;
    }else{
        return `No es palíndromo: ${array}`;
    }

}

const palabra = "Anita lAva la tina";
console.log(palindromo(palabra));



//Encuentra el segundo número más grande de un arreglo sin usar sort
//Convierte el siguiente string en un objeto nombre: Anna, edad: 23, ciudad: Saltillo
//Filtra los elementos "falsy" (false, 0, ", null, undefined, NaN) de un arreglo
//Filtra los usuarios que tengan edad mayor o igual a 18