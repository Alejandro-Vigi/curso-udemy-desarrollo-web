const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio:500},
    { nombre: 'Televisor 20 pulgadas', precio:700},
    { nombre: 'Tablet', precio:300},
    { nombre: 'Audifonos', precio:200},
    { nombre: 'Teclado', precio:50},
    { nombre: 'Celular', precio:500},
    { nombre: 'Bocinas', precio:300},
    { nombre: 'Laptop', precio:800}
];

// Si quiero iterar cada elemento en consola o imprimir en HTML: USAR FOREACH

// Si quiero crear un nuevo arreglo: USAR MAP


// Se ejecuta la cantidad de elementos que tenga segun el arreglo
// Foreach (usando unicamente en arreglos)

carrito.forEach(producto => console.log(producto.nombre));

// map (usado unicamente en arreglos)
carrito.map(producto => console.log(producto.nombre));

// Impresion en pantalla de separación

console.log('*********************');






const arreglo1 = carrito.forEach(producto => producto.nombre);

// map (usado unicamente en arreglos)
const arreglo2 = carrito.map(producto => producto.nombre);

console.log(arreglo1);
console.log(arreglo2);

// Como podemos ver, solo se guarda el arreglo nuevo usando MAP

// Usando map

const arreglo3 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);
console.log(arreglo3);