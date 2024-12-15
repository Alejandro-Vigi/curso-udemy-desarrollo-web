// Async / await

function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('Descargando clientes, espere...');
        
        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);


    });
}

async function app(){
    try {
        resultado = await descargarNuevosClientes();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log('Este código no se bloquea');

// Cada cierto intervalo se ejecuta
// setInterval(function(){
//     console.log('Cada 1 seg...')
// }, 1000)

// Solo se ejecuta 1 vez cada cierto tiempo que pongamos
// setTimeout(() => {
//     console.log('set timeout...')
// }, 1000);