// Como hacer concatenación, nuevas formas y viejas

const nombre = "Alejandro";
const email = "correo@correo.com"

// Concatenacion
console.log("Nombre Cliente: " + nombre + " Email: " + email); // Forma Antigua
console.log("Nombre Cliente:" , nombre , "Email:" , email); // Forma Antigua

// Template Strings - Strings Literals
console.log(`Nombre Cliente: ${nombre} Email: ${email}`);