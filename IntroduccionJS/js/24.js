// Switch

const metodoPago = 'tarjeta';

switch(metodoPago){
    case 'tarjeta':
        console.log("Pagaste con tarjeta");
        break;
    case 'cheque':
        console.log("El usuario pagará con cheque, se revisarán los fondos");
        break;
        case 'efectivo':
        console.log("Pagaste con efectivo");
        break;
    default:
        console.log("Aún no haz pagado");
        break;
}