// Destructuring de Objetos

const producto = {
    nombreProducto : "Monitor 20\"",
    precio : 300,
    disponible : true
}

// Forma anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;
// const disponible = producto.disponible;

// console.log(precioProducto);
// console.log(nombreProducto);
// console.log(disponible);

// Destructuring (Forma actual)
const {
    precio,
    nombreProducto,
    disponible
} = producto;

console.log(precio);
console.log(nombreProducto);
console.log(disponible);

