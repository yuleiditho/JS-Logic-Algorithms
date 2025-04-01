export class Transporte {
    constructor(tipo, costoExtra) {
        this.tipo = tipo;
        this.costoExtra = costoExtra;
    }

    mostrarTransporte() {
        console.log(`Tipo: ${this.tipo} - Costo Extra: ${this.costoExtra}`);
    }
}

export const transportes = [
    new Transporte("Avión", 200),
    new Transporte("Tren", 100),
    new Transporte("Bus", 80),
    new Transporte("Crucero", 300)
];

export const agregarTransporte = (transporte) => {
    transportes.push(transporte);
};