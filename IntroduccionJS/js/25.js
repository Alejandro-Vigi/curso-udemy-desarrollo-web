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

for(let i = 0; i <= carrito.length-1 ; i++){
    console.log(carrito[i].nombre);
}

// While loop

let i = 0; // Indice

while(i <= carrito.length-1){ // Condicion
    if(i % 2 == 0){
        console.log(`El nombre del producto impar ${i} es ${carrito[i].nombre}.`);
    } else {
        console.log(`El número del producto par ${i} es ${carrito[i].nombre}.`);   
    }
    i++; // Incremento
};

// Do while loop

// Ejecuta el codigo al menos una vez y despues revisa si se cumple la condicion

i = 0;

do{
    console.log(i);
    i++;
}while(i < 10);