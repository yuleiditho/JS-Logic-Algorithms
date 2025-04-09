import { Departamento } from "./Departamento.js";
import { Producto } from './Producto.js';
import { GestorLista } from "./GestorLista.js";

const gestorLista = new GestorLista();

const cargarDepartamentos= () =>{
    const departamentoSelect = document.getElementById('departamento');
    const gestorDepartamentos = new Departamento();

    departamentoSelect.innerHTML = '<option value="">Selecciona un departamento</option>';
    departamentoSelect.style.backgroundColor ='#ffe2bcf1';

    gestorDepartamentos.listaDepartamentos.forEach(departamento => {
        const option = document.createElement('option');
        option.value = departamento;
        option.textContent = departamento;
        option.style.backgroundColor ='#fff';
        departamentoSelect.appendChild(option);
    });
}

const cargarProductos= () =>{
    try{
        const listaProductos = [
            new Producto("Lácteos", "Leche", 1),
            new Producto("Lácteos", "Queso", 1),
            new Producto("Lácteos", "Mantequilla", 1),
            new Producto("Carnes", "Jamón", 1)
        ];

        listaProductos.forEach(producto => gestorLista.addProduct(producto));
    }catch (error){
        console.error("Error al cargar productos iniciales:", error.message);
    }
}

const eventSubmit = (event) =>{
    event.preventDefault();

    const productoInput = document.getElementById('producto');
    const departamentoSelect = document.getElementById('departamento');

    const producto = productoInput.value.trim();
    const departamento = departamentoSelect.value;

    try{
        const nuevoProducto = new Producto(departamento, producto, 1);

        gestorLista.addProduct(nuevoProducto);

        actualizarListaDOM();

        productoInput.value = '';
        departamentoSelect.value = '';

        console.log('Producto agregado:', nuevoProducto);
    }catch(error){
        alert(error.message);
    }

}

const deleteProducto = (nombreProducto) => {
    if (confirm(`¿Estás seguro de eliminar ${nombreProducto}?`)) {
        gestorLista.delelteProduct(nombreProducto);
        actualizarListaDOM();
        console.log(`Producto eliminado: ${nombreProducto}`);
    }
};

const actualizarListaDOM = () =>{
    const listContainer = document.querySelector('.list-container');

    const rows = listContainer.querySelectorAll('.cnt-row:not(.header-row)');
    rows.forEach(row => row.remove());

    const productosOrden = [...gestorLista.listaProductos].reverse();

    productosOrden.forEach(producto => {
        const row = document.createElement('div');
        row.className = 'cnt-row';

        row.innerHTML = `
            <div class="checkbox-col">
                <input type="checkbox" name="" id="">
            </div>
            <div class="product-col">${producto.producto}</div>
            <div class="dept-col">${producto.departamento}</div>
            <div class="action-col">
                <button type="button" class="btn-delete"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        
        const deleteBtn = row.querySelector('.btn-delete');
        deleteBtn.addEventListener('click', () =>{
            deleteProducto(producto.producto);
        });

        const checkbox = row.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', (e) => {
            if(e.target.checked){
                row.classList.add('checked');
            }else{
                row.classList.remove('checked');
            }
        })

        listContainer.appendChild(row);
    });

  
};

const configureEvents = () =>{
    const form = document.getElementById('lista-compras');
    form.addEventListener('submit', eventSubmit);
};

document.addEventListener('DOMContentLoaded', () => {
    cargarDepartamentos();
    cargarProductos();
    configureEvents();
    actualizarListaDOM();
});