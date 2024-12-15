// Classes 

class Producto{
    constructor(nombre, precio, disponibilidad){
        this.nombre = nombre;
        this.precio = precio;
        this.disponiibilidad = disponibilidad;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de ${this.precio} y la disponibilidad es: ${this.disponibilidad}`;
    }

    precioProducto(){
        return `El precio del producto es: ${this.precio}`;
    }
}

const producto = new Producto();
const producto2 = new Producto('Monitor curvo de 29 pulgadas"', 3800, true);
const producto3 = new Producto('Laptop', 5600, false);

console.log(producto2);
console.log(producto3.precioProducto());