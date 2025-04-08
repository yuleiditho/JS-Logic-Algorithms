import { Producto } from './Producto.js';


export class GestorLista{
    constructor(){
        this.listaProductos = [];
    }

    addProduct(producto){
        if (producto instanceof Producto){
            this.listaProductos.push(producto);
            console.log(`Producto agregado: ${producto.producto}`);
        }
    }

    delelteProduct(item){
        let index = this.listaProductos.findIndex(producto => producto.producto.toLowerCase() === item.toLowerCase());
        if(index > -1){
            const eliminado = this.listaProductos.splice(index, 1)[0];
            console.log(`Producto: ${eliminado.producto} eliminado`);
        }else{
            console.log(`Producto ${item} no encontrado en su lista de Compras`);
        }
    }

    showList(){
        if(this.listaProductos.length === 0){
            console.log(`No hay productos en la lista de Compras`);
        }else{
            console.log("=============Lista de Compras:==============");
            this.listaProductos.forEach(lista => lista.showProduct());
        }
    }
}
