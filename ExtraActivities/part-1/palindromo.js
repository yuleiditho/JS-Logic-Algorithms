//Escribe una función que determine si una palabra es palíndromo (se lee igual al derecho y al revés).

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
const palabra2 = "hola a todos";
console.log(palindromo(palabra));
console.log(palindromo(palabra2));