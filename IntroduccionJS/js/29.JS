// Classes 

class Producto{
    constructor(nombre, precio, disponibilidad){
        this.nombre = nombre;
        this.precio = precio;
        this.disponiibilidad = disponibilidad;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
    }

    ObtenerPrecio(){
        return `El precio del producto es: ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor curvo de 29 pulgadas"', 3800, true);
const producto3 = new Producto('Laptop', 5600, false);

// console.log(producto3.precioProducto());

class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }

    ObtenerPrecio(){
        super.ObtenerPrecio();
        console.log("Y si hay en existencia");
    }
}

const libro = new Libro('Js la revolución', 120, '34215434253');
console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());