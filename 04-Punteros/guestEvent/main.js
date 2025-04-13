function encontrarPareja(arr) {
    let inicio = 0;
    let pares = [];

    while (inicio < arr.length) {
        let siguiente = inicio + 1;
        while (siguiente < arr.length){
            // TODO: Compara las iniciales de los nombres en los punteros
            // Si coinciden, devuelve el par
            if(arr[inicio][0] === arr[siguiente][0]){
                pares.push([arr[inicio], arr[siguiente]]);
            }
            siguiente++;
        }
        
        // TODO: Avanza los punteros si no coinciden
        inicio++;

    }

    return pares; // Si no se encuentra ningún par
}

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo", "Clara", "Cristina"];
console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]