// POO

/* Object Literal*/
const producto = {
    nombre: 'tablet',
    precio: 500
}

// Object Constructor
function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function(){
    return `El cliente ${this.nombre} ${this.apellido}`;
}

function Producto(nombre, precio, disponibilidad){
    this.nombre = nombre;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
}

// Prototype
// Crear funciones que solo se utilizan en un objeto en especifico
//

Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
}

const producto2 = new Producto('Monitor curvo de 29 pulgadas"', 3800, true);
const producto3 = new Producto('Laptop', 5600, false);
const cliente = Cliente('Alejandro', 'Vigi');

// const producto4 = new Producto('PC', 9000, false);
// const producto5 = new Producto('Mouse', 800, true);
// console.log(producto4);
// console.log(producto5);

console.log(cliente);
console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
