// function sumar(num1,num2){
//     return num1 + num2;
// };

// const resultado = sumar(2,3);
// console.log(resultado);

let total = 0

function agregarCarrito(precio){
    return total += precio;
};

function calcularImpuesto(total){
    return 1.15 * total;
};

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalAPagar = calcularImpuesto(total);
console.log(totalAPagar);
console.log(`El total del carrito ${total} con impuestos es ${totalAPagar}`);