import { destinos } from "./destinos.js";
import { transportes } from "./transportes.js";

export class Viajes {
    constructor(destino, fecha, transporte, boletos) {
        this.destino = destino;
        this.fecha = fecha;
        this.transporte = transporte;
        this.boletos = boletos;
        this.costo = this.calcularCosto();
    }

    validarViaje() {
        const destinoFinal = destinos.find(d => d.destino === this.destino && d.transporte === this.transporte);
        const transporteFinal = transportes.find(t => t.tipo === this.transporte);

        if (!destinoFinal) {
            return `Error: No existe la combinación ${this.destino} - ${this.transporte}`;
        }
        if (!transporteFinal) {
            return `Error: El transporte ${this.transporte} no está registrado`;
        }
        if (destinoFinal.asientosDisponibles < this.boletos) {
            return `Error: No hay suficientes asientos disponibles (${destinoFinal.asientosDisponibles} disponibles)`;
        }
        if (this.boletos <= 0) {
            return "Error: La cantidad de boletos debe ser mayor a 0";
        }

        return { destinoFinal, transporteFinal };
    }

    calcularCosto() {
        const validacion = this.validarViaje();
        if (typeof validacion === 'string') return 0;

        // Actualizar disponibilidad
        validacion.destinoFinal.asientosDisponibles -= this.boletos;
        validacion.destinoFinal.asientosOcupados += this.boletos;

        // Calcular costo
        let costoTotal = (validacion.destinoFinal.costo + validacion.transporteFinal.costoExtra) * this.boletos;
        
        // Aplicar descuento por volumen
        if (this.boletos >= 3) {
            costoTotal *= 0.85; // 15% de descuento
        }

        return costoTotal;
    }

    mostrarItinerario() {
        console.log(`* Destino: ${this.destino}`);
        console.log(`* Fecha: ${this.fecha}`);
        console.log(`* Transporte: ${this.transporte}`);
        console.log(`* Boletos: ${this.boletos}`);

        const validacion = this.validarViaje();
        if (typeof validacion === 'string') {
            console.log("*** Error - Registro Inválido: ***");
            console.log(validacion);
        } else {
            console.log(`* Costo Total: $${this.costo}`);
        }
        console.log("--------------------------------------");
    }
}