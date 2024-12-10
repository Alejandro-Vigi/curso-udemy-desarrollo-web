// String o cadenas de texto

const producto = "Monitor de 20 pulgadas";
const producto2 = String('Monitor de 30 pulgadas');
const producto3 = new String('Monitor de 50 pulgadas');

// Ver en la consola la impresion
console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(typeof producto3);

// typeof -> saber tipo de dato

// Se puede usar comillas sencillas '' o dobles ""

// Mandar comillas dobles al strink 
const producto4 = "Monitor de 20\""; // Comillas dobles
const producto5 = 'Monitor de 20"';  // Comillas sencillas

// Métodos para los strings
const tweet = 'Aprendiendo JS con el curso de Desarrollo Web completo';
const producto7 = 'Monitor HD"';

console.log(tweet.length);
console.log(producto7);

// IndexOf Que posicion se encuentra un texto en un String
console.log(tweet.indexOf('JS'));
console.log(producto7.indexOf('Tablet'));

// Includes (Returna True o False si encuentra un texto en un String
console.log(tweet.includes('JS'));
console.log(producto7.includes('Tablet'));