// Arreglo para validar el formulario

// e o bien event : Es el objeto del evento
// e.target :       Es el elemento de html en el que ocurrio el evento
// e.target.id :    Es el campo en html con el id, por ejemplo id="nombre"
// e.target.value : Es el contenido actual (valor) del campo donde el usuario está escribiendo. 

// Definimos las variables seleccionando cada input
const nombre1 = document.querySelector('#nombre');
const nombre2 = document.querySelector('#email');
const nombre3 = document.querySelector('#mensaje');

// Añadimos un evento cada que se ingresa un caracter a cada input y realizamos la funcion de leerTexto
nombre1.addEventListener('input', leerTexto);
nombre2.addEventListener('input', leerTexto);
nombre3.addEventListener('input', leerTexto);

// Creamos un objeto vacío en donde iran los datos
const datos = {
    nombre : '',
    email : '',
    mensaje : ''
}

// Realizamos la lectura del caracter por caracter de forma ordenada
function leerTexto(e){
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;
    // console.log(datos);
}

// Hacemos el evento de Submit con cada caso
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    // Validar formulario

    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostarError('Todos los campos son obligatorios');
        return; 
    }

    // Enviar fomulario
    correctoFormulario('Se ha enviado el formulario correctamente');

})

// Funcion que crea un parrafo con estilos para mostrar error en pantalla
function mostarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    console.log(error);

    formulario.appendChild(error);

    // Desaparecer despues de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 5000); 
}

// Funcion que crea un parrafo con estilos para mostrar que ya se mandó el formulario
function correctoFormulario(mensaje) {
    const correcto = document.createElement('P');
    correcto.textContent = mensaje;
    correcto.classList.add('correcto');
    console.log(correcto);

    formulario.appendChild(correcto);

    // Desaparecer despues de 5 segundos
    setTimeout(() => {
        correcto.remove();
    }, 5000); 
}