// Estructuras de control

const puntaje = 1000;

// Si usamos el triple === va a verificar el tipo de dato
if(puntaje == 1001) {
    console.log('Si el puntaje es 1000');
} else {
    console.log(`El puntaje no es 1000`);
};

if(puntaje !== 1000){
    console.log("Si es diferente a 1000");
};

const efectivo = 1000;
const carrito = 800;

if(efectivo > carrito) {
    console.log("El usuario puede pagar");
} else {
    console.log("Fondos insuficientes");
};

// else if
const rol = 'Editor';

if(rol == 'Administrador') {
    console.log('Acceso a todo el sistema');
} else if(rol == 'Editor') {
    console.log("Eres editor pero no puedes acceder")
} else {
    console.log("No tienes acceso");
}