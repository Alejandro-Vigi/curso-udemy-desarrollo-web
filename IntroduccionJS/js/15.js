// Arreglos

const numeros = [4, 5, 12, 45, 7];


// Con constructor
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

// Para acceder a los valores de un arreglo
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

// console.log("Imprimiendo los numeros con foreach");
// // O bien usar solo un foreach en una linea
// numeros.forEach( function(numero){
//     console.log(numero);
// })

// Agregar al final del array/arreglo con push agrega al final
numeros.push(80);
numeros.push(90, 100);
numeros.push(90, 100, 150);
// Imprimiendo de forma bonita en una tabla
console.table(numeros);

// Usando unshift agrega elementos al inicio del arreglo/array
numeros.unshift(-10,-20,-30);
// Imprimiendo de forma bonita en una tabla
console.table(numeros);

// Usando pop elimina el ultimo valor del arreglo
console.table(meses);
meses.pop();
console.table(meses);

//Usando shift elimina el primer valor del arreglo
console.table(meses);
meses.shift();
console.table(meses)

meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril'];

// Busca en el indice el elemento [2] y elimina solo 1 valor
meses.splice(2, 1)
console.table(meses2)

// Haciendo un nuevo arreglo para no operar los ya creados ingresandolos al final
const nuevoArreglo = [...meses2, 'Mayo', 'Junio'];
console.log(nuevoArreglo);

// Haciendo un nuevo arreglo para no operar los ya creados ingresandolos al inicio
const nuevoArreglo2 = ['Julio', 'Agosto', ...nuevoArreglo];
console.log(nuevoArreglo2);