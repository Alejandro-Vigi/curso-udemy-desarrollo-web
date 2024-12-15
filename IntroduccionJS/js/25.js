// For loop

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// Haciendo un for normal
for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log(`El número ${i} es par.`);
    } else {
        console.log(`El número ${i} es impar.`);
    }
}

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

for(let i = 0; i <= carrito.length ; i++){
    console.log(carrito[i].nombre);
}


// While loop






// Do while loop