// This

// Se usa para el objeto del que se esta ejecutando.
// Usando this se hace referencia a las propiedades del objeto sobre el cual se esta ejecutando esa funcion.
const reservacion = {
    nombre : 'Alejandro',
    apellido : 'Vigi',
    total : 500,
    pagado : false,
    // Arrow function hara referencia hacia la ventana (window) global, mientras la funcion hace referencia
    // al objeto sobre el cual se esta ejecutando.
    informacion : function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
};

reservacion.informacion();