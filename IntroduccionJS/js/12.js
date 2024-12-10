"use strict" // Correr JS en modo estricto

//Objetos
const producto = {
    nombreProducto : "Monitor 20\"",
    precio : 300,
    disponible : true
}
const producto2 = {
    nombreProducto : "Monitor 20\"",
    precio : 300,
    disponible : true
}

// freeze y isFrozen
Object.freeze(producto);

// No te permite agregar nuevas propiedades ni eliminar ni editar
// producto.imagen = 'imagen.jpg';
// delete producto.precio;
// producto.precio = 500;

console.log(Object.isFrozen(producto));

console.log(producto)

// seal no te permite agregar ni eliminar pero SI editar
Object.seal(producto2);
producto2.precio = 500;
console.log(producto2);