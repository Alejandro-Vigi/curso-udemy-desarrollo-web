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
enlaces[0].classList.remove('navegacion__enlace')

// Se puede hacer de la misma forma:
// document.querySelectorAll('.navegacion a')[0].textContent = 'Nuevo texto para Enlace';

// gerElementById

const heading2 = document.getElementById('heading');
console.log(heading2);