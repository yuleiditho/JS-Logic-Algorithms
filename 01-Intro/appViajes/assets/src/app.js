/* import { Viajes } from "./viajes.js";
import { agregarDestino, Destino, destinos } from "./destinos.js";
import { agregarTransporte, Transporte, transportes } from "./transportes.js";
 */
// Inicial la aplicación
const iniciarApp = () => {
    // Agregar transportes si es necesario
    agregarTransporte(new Transporte("Limo", 500));
    
    //Agregar Destino
    agregarDestino(new Destino("Alemania", 500, "Crucero", 100));
    agregarDestino(new Destino("España", 500, "Limo", 10));

    
    // Registro de Viajes
    const registros = [
        new Viajes("París", "2024-06-15", "Avión", 5),
        new Viajes("Londres", "2024-07-04", "Tren", 2),
        new Viajes("New York", "2025-03-23", "Metro", 3),       // Este fallará (transporte no exite) 
        new Viajes("Canadá", "2025-03-23", "Crucero", 5),       // Este fallará (destino no existe)
        new Viajes("Alemania", "2025-03-23", "Crucero", 0)    // Este fallará (por la cantidad de boletos)
    ];
    
    mostrarViajes(registros);
    destinosDisponible();
    transportesDisponible();
};

const destinosDisponible = () => {
    console.log("\n---------Lista de Destinos Disponibles---------");
    destinos.forEach(destino => destino.mostrarDestinos());
};

const transportesDisponible = () => {
    console.log("\n---------Lista de Transportes Disponibles---------");
    transportes.forEach(transporte => transporte.mostrarTransporte());
};

const mostrarViajes = (registros) => {
    console.log("\n-----------Itinerario de Viajes--------------");
    registros.forEach(registro => registro.mostrarItinerario());
};

// Ejecutar la aplicación
iniciarApp();