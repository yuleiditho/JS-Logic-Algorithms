import { transportes } from './transportes.js';

export class Destino {
    constructor(destino, costo, transporte, asientosDisponibles) {
        this.destino = destino;
        this.costo = costo;
        this.transporte = transporte;
        this.asientosDisponibles = asientosDisponibles;
        this.asientosOcupados = 0;
    }

    mostrarDestinos() {
        const transporte = transportes.find(t => t.tipo === this.transporte);
        console.log(`Destino: ${this.destino} \t Costo: ${this.costo}`);
        console.log(`Transporte: ${this.transporte} \t Costo Extra: ${transporte.costoExtra}`);
        console.log(`Asientos Disponibles: ${this.asientosDisponibles} \t Asientos Ocupados: ${this.asientosOcupados}`);
        console.log("----------------------------------------------------");
    }
}

export const destinos = [
    new Destino("París", 500, "Avión", 150),
    new Destino("Londres", 400, "Tren", 150),
    new Destino("New York", 600, "Bus", 30)
];

export function agregarDestino(destino) {
    destinos.push(destino);
}