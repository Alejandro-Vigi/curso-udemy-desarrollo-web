// POO

/* Object Literal*/
const producto = {
    nombre: 'tablet',
    precio: 500
}

// Object Constructor

function Producto(nombre, precio, disponibilidad){
    this.nombre = nombre;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
}
const producto2 = new Producto('Monitor curvo de 29 pulgadas"', 3800, true);
const producto3 = new Producto('Laptop', 5600, false);
const producto4 = new Producto('PC', 9000, false);
const producto5 = new Producto('Mouse', 800, true);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);