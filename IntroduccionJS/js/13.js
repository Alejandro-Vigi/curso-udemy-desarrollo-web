//Unir dos Objetos
const producto = {
    nombreProducto : "Monitor 20\"",
    precio : 300,
    disponible : true
};
const medidas = {
    peso : "1kg",
    medida : "1m"
};

// Unir dos objetos
const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(medidas);
console.log(nuevoProducto);