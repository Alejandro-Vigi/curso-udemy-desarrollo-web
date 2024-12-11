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
    return producto.nombre;
})

console.log(resultado)