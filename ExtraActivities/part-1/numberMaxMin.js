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