import { Departamento } from "./Departamento.js";

export class Producto{
    constructor(departamento, producto, cantidad){
        const gestorDepartamentos = new Departamento();

        if(!gestorDepartamentos.departamentoValido(departamento)){
            throw new Error(`El departamento ${departamento} no es válido`);
        }
        
        this.departamento = departamento;
        this.producto = producto;
        this.cantidad = cantidad;
    }

    showProduct(){
        console.log(`Departamento: ${this.departamento}, Artículo: ${this.producto}, Cantidad: ${this.cantidad}`);
    }
}