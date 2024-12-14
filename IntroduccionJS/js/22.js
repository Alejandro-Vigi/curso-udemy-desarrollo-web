// Arrow Functions

// Cuando solo es una linea se omiten las llaves {}
const sumar2 = (numero1, numero2) => console.log(numero1 + numero2);
sumar2(5, 10);

// Cuando solo es un parametro se pueden omitir los parentesis
const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo("Tecnología");

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
];

// Usando el Foreach
meses.forEach(mes => {
    if(mes=='Marzo'){
        console.log('Marzo si existe');
    }
});

// // Anteriormente con some
// // Para arreglo con objetos (Retorna un true si lo tiene)
// resultado = carrito.some(function(producto){
//     return producto.nombre === 'Celular';
// });

// Some para objetos con Arrow function 
resultado = carrito.some(producto => producto.nombre === 'Celular');
console.log(resultado);

// Anteriormente con reduce
// Reduce (Obtengo el total de la suma de los productos)
// resultado = carrito.reduce(function(total, producto){
//     return total + producto.precio
// }, 0); 

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);

// Filter anteriormente
// Filter (Sirve para filtrar objetos en base a una condicion)
// resultado = carrito.filter(function(producto){
//     return producto.precio > 400
// });

resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);

// Filter anteriormente
// resultado = carrito.filter(function(producto){
//     return producto.nombre === 'Celular'
// });

resultado = carrito.filter(producto => producto.nombre === 'Celular');
console.log(resultado);