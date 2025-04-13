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


console.log('Sin duplicados', deleteDuplicate(duplicados));