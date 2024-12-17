// querySelector

const heading = document.querySelector('.header__texto h2') // Retorna 0 o 1 elemento
heading.textContent = 'Nuevo Heading';
heading.classList.add('nueva-clase');
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a') // Retorna 0 o todos los elementos con ese selector
enlaces[0].textContent = 'Nuevo texto para Enlace';
enlaces[0].href = 'http://google.com';
enlaces[0].classList.add('nueva-clase2');
// enlaces[0].classList.remove('navegacion__enlace')

// Se puede hacer de la misma forma:
// document.querySelectorAll('.navegacion a')[0].textContent = 'Nuevo texto para Enlace';

// gerElementById

const heading2 = document.getElementById('heading');
console.log(heading2);

// Generar un nuevo enlace 
const nuevoEnlace = document.createElement('A') // Se recomienda en mayusculas

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Un nuevo enlace';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace')

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


// Eventos

console.log(1);

// callback
window.addEventListener('load',function(){ // Load espera a que JS y los archivos que dependen del HTML esten listos
    console.log(2);
})

// Es lo mismo que load pero distinta sintaxis
window.onload = function(){
    console.log(3);
}

// Solamente se espera a que se descargue el HTML pero no espera CSS ni imagenes y se ejecuta primero
document.addEventListener('DOMContentLoaded',function(){
    console.log(4);
})

console.log(5);

// Para implementarlo con funciones

window.addEventListener('load', imprimir);

function imprimir(){
    console.log(6);
}

// Más eventos

window.onscroll = function() {
    console.log('Scrolling...')
}

// Seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click',function(e){
    console.log(e);
    e.preventDefault();
    console.log('enviando formulario...')
})

// Eventos de los inputs y de los textarea

// change: Cada que se modifica se realiza
const nombre = document.querySelector('#nombre');
// nombre.addEventListener('change', function(){
//     console.log('Escribiendo - cada cambio');
// })

// input: Cada caracter ingresado funciona como el evento
const nombre2 = document.querySelector('#nombre');
// nombre2.addEventListener('input', function(){
//     console.log('Escribiendo - continuamente');
// })


// Enviando a la terminal lo que se escribe en el input
const nombre3 = document.querySelector('#nombre')
// nombre3.addEventListener('input', function(e){
//     console.log(e.target.value);
// })

// Reduciendo codigo para fijar en los 3 campos
const nombre4 = document.querySelector('#nombre');
const nombre5 = document.querySelector('#email');
const nombre6 = document.querySelector('#mensaje');

nombre4.addEventListener('input', leerTexto);
nombre5.addEventListener('input', leerTexto);
nombre6.addEventListener('input', leerTexto);

// Arreglo para validar el formulario

// e o bien event : Es el objeto del evento
// e.target :       Es el elemento de html en el que ocurrio el evento
// e.target.id :    Es el campo en html con el id, por ejemplo id="nombre"
// e.target.value : Es el contenido actual (valor) del campo donde el usuario está escribiendo.

const datos = {
    nombre : '',
    email : '',
    mensaje : ''
}

function leerTexto(e){
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;
    // console.log(datos);
}

// // El evento de Submit
// const formulario = document.querySelector('.formulario');
// formulario.addEventListener('submit', function(evento){
//     evento.preventDefault();

//     // Validar formulario

//     const {nombre, email, mensaje} = datos;

//     if(nombre === '' || email === '' || mensaje === ''){
//         console.log('Todos los campos son obligatorios');
//         return; 
//     }

//     // Enviar fomulario

//     console.log('Enviando formulario');

// })