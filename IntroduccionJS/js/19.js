// Declaracion de funcion
function sumar(numero1, numero2){ //numero1 y numero2 son parametros
    console.log(numero1+numero2);
};

// Se manda a llamar
sumar(10,10); // Argumentos o los valores reales
sumar(3,3); // Argumentos o los valores reales
sumar(3,6); // Argumentos o los valores reales
sumar(1,2); // Argumentos o los valores reales

// Expresion de la funcion
const sumar2 = function(n1, n2) {
    console.log(n1 + n2);
};

// Se manda a llamar
sumar2(5, 10);

// Para poner por default argumentos lo podemos hacer de la siguiente forma:
function sumar3(num1 = 0, num2 = 0){
    console.log(num1+num2,);
};

sumar3(5,3); // Usamos los parametros requeridos
sumar3(5) // Usamos solo el primer parametro (num1)
sumar3(null,3); // Usamos solo el segundo parametro (num2)