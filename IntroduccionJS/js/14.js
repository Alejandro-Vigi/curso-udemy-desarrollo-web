// Arreglos

const numeros = [4, 5, 12, 45, 7];

console.log(numeros);

// Imprimiendo de forma bonita en una tabla
console.table(numeros);

// Con constructor
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');

console.log(meses);

// Imprimiendo de forma bonita en una tabla
console.table(meses);

const arreglo = ["Hola", true, 10, "Si", null, {nombre:"Juan", trabajo:"Programador"}, [1, 4, 7]];
console.log(arreglo);
console.table(arreglo);

// Acceder a valores de un arreglo con su posición (index)
console.log(arreglo[1]);
console.log(arreglo[100]);

// Conocer extensión de un arreglo
console.log(arreglo.length);
console.log(meses.length);

console.log(`Meses en total: ${numeros.length}`);
console.log("Imprimiento los numeros uno por uno");
// Para acceder a los valores de un arreglo
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

console.log("Imprimiendo los numeros con foreach");
// O bien usar solo un foreach en una linea
numeros.forEach( function(numero){
    console.log(numero);
})