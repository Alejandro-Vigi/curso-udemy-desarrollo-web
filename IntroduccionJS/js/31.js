const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = false;

    if(auth) {
        resolve('Usuario Autenticado'); // EL PROMISE SE CUMPLE
    } else {
        reject('No se pudo iniciar sesión'); // EL promise no se cumple
    }
})

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error));
    
// En los Promises existen 3 posibles valores
// Pending:   No se ha cumplido pero tampoco se ha rechazado.
// Fulfield:  Ya se cumplio.
// Reject:    No se pudo cumplir. 