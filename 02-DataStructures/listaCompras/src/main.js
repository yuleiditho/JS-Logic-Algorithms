/* Gestión de Lista de Compras: 
los usuarios deben poder añadir productos a la lista, eliminar y ver la lista completa de compras
*/

import { GestorLista } from "./GestorLista.js";
import { Producto } from "./Producto.js";
import { Departamento } from "./Departamento.js";

const iniciarApp = () => {
    const compra = new GestorLista();
    const gestorDeparmentos = new Departamento();
    gestorDeparmentos.mostrarDepartamentos();

    try{
        const listaProductos = [
        new Producto("Lácteos", "Leche", 2),
        new Producto("Lácteos", "Queso", 2),
        new Producto("Lácteos", "Mantequilla", 2),
        new Producto("Carnes", "Jamón", 2)
        //new Producto("Bebeffaosdkfopas", "Agua", 3)
        ]

        listaProductos.forEach(producto => compra.addProduct(producto));

        compra.showList();

        compra.delelteProduct("Queso");

        compra.showList(); 

    } catch (error){
        console.error(error.message);
    }
   
}

iniciarApp();
