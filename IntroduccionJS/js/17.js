// Funciones

// Declaracion de funcion
function sumar(){
    console.log(10+10);
};

// Se manda a llamar
sumar();

// Expresion de la funcion
const sumar2 = function() {
    console.log(3+3);
}

// Se manda a llamar
sumar2();

// IIFE (Se mandan a llamar ellas mismas
// hace que no se pueda acceder desde otro js a las variables contenidas aqui
// y se mezclen)
(function(){
    console.log("Esto es una funcion");
})();


// Hoisting (En el primer mandado a llamar registra funciones y despues las ejecuta (manda a llamar))

// No da error mandar a llamar una funcion y despues declararla de esta forma

// Se manda a llamar
sumar3();

// Declaracion de funcion
function sumar3(){
    console.log(10+10);
};

// Si da error si intentamos llamar esta funcion y despues declararla de esta forma

// Se manda llamar 
sumar4();

// Expresion de la funcion
const sumar4 = function() {
    console.log(3+3);
}