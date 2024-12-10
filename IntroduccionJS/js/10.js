// Objetos

const nombreProducto = "Monitor 20\"";
const precio = 300;
const disponible = true;

// Podemos crear todo eso que contenga a los 3
const producto = {
    nombreProducto : "Monitor 20\"",
    precio : 300,
    disponible : true
}

// Acceder al atributo con .
// console.log(producto.precio);
// console.log(producto.nombreProducto);
// console.log(producto.disponible);

// Acceder al atributo con []
// console.log(producto["precio"]);

// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';
console.log(producto);

// Eliminar propiedades
delete producto.disponible;
console.log(producto);

