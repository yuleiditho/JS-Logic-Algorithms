//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

//Usa filter() para obtener los productos que cuesten menos de $100.
const costo = 100;
const costoMenor = (costo) => productos.filter(p => p.precio < costo);

console.log(`Productos que cuestan menos de ${costo}: `, costoMenor(costo));

//Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
const allProducts = productos.map(p => p.nombre);

console.log(`Productos: ${allProducts.join(', ')}`);

//Usa sort() para ordenar esos productos alfabéticamente por su nombre.
const sortProducts = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));

console.log('Productos Ordenados: ', sortProducts);

//Uso reduce() para sumar todos los precios de los articulos de un departamento
const departamento = "Ropa";
function costoTotal (departamento){
    let totalProducts = 0;

    const productosFiltrados = productos.filter(p => p.categoria.toLowerCase() === departamento.toLowerCase());
    totalProducts = productosFiltrados.reduce((total, p) => total + p.precio, 0);

    return totalProducts;
}
console.log(`El costo total de los productos en la categoría "${departamento}" es: ${costoTotal(departamento)}`);
