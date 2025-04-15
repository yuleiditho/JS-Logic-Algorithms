// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];


function findGift(gifts, giftName, index = 0) {
  // Caso base 1: Si llegamos al final de la lista
    if(index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }
    //Caso base 2: Si encuentra el regalo.
    if(gifts[index] === giftName){
        return `${giftName} está en la posición ${index}`;
    }
    //Llamada recursiva: continuar buscando en la siguiete posición
    return findGift(gifts, giftName, index + 1);
}

// Casos de ejemplo:
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));
// Salida esperada:
// "Lego está en la posición 3."

// Caso cuando el regalo no está en la lista
let giftToFind2 = "Camión";
console.log(findGift(gifts, giftToFind2));
// Salida esperada:
// "Camión no está en la lista."