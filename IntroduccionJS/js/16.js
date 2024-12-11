// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio:500},
    { nombre: 'Televisor 20 pulgadas', precio:700},
    { nombre: 'Tablet', precio:300},
    { nombre: 'Audifonos', precio:200},
    { nombre: 'Teclado', precio:50},
    { nombre: 'Celular', precio:500},
    { nombre: 'Bocinas', precio:300},
    { nombre: 'Laptop', precio:800}
]

// forEach

meses.forEach (function(mes){
    if(mes=='Marzo'){
        console.log('Marzo si existe');
    }
});

// Includes para arreglo sin objetos
let resultado = meses.includes('Marzo');
console.log(resultado);

// Para arreglo con objetos
resultado = carrito.some(function(producto){
    return producto.nombre === 'Celular';
});

// Reduce
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0); 

console.log(resultado);

// Con array function
resultado = carrito.reduce((total, producto) => total + producto.precio, 0); 

console.log(resultado);

// Filter 
resultado = carrito.filter(function(producto){
    return producto.precio > 400
});

console.log(resultado);

resultado = carrito.filter(function(producto){
    return producto.precio < 400
});

console.log(resultado);

resultado = carrito.filter(function(producto){
    return producto.nombre === 'Celular'
});

console.log(resultado);