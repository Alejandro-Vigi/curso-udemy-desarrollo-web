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
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; 
    }

    // Enviar fomulario
    mostrarAlerta('Se ha enviado el formulario correctamente');

})

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    
    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    // Desaparecer despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000); 

}