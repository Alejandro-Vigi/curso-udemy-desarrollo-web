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


