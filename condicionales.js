//if ternario

// let fruta = 'manzana';

// let resultado = fruta == 'manzana'? 'si, es manzana': 'no es manzana';

//console.log(resultado);


//switch

// let semaforo = 'verde';

// switch (semaforo) {
//     case 'verde': 
//     console.log('cruce');
//     break;
//     case 'amarillo': 
//     console.log('apurate');
//     break;
//     case 'rojo': 
//     console.log('no cruce');
//     break;
//     default:
//     console.log('error');

//     }


// funcion reemplazada por switch     
//    let dia = 'jueves'
//function finDeSemana (dia) {	
//	if (dia == 'viernes') {
//    	console.log('buen finde')
//	} else if (dia == 'lunes') {
//   	console.log('buena semana')
//	} else {
//    	console.log('buen dia')
//	}
//}

//let dia = 'viernes';

//switch (dia) {
//    case 'viernes': 
//    console.log('buen finde');
//    break;
//    case 'lunes': 
//    console.log('buena semana');
//    break;
//    default:
//    console.log('buen dia');
//    }


//     let dia = 'martes';

//     function tengoClases(dia) {
// 	switch (dia) {
//     	case 'lunes': 
//     console.log('tienes clases');
//     break;
//     default:
//     console.log('no tienes clases');
//     }
//     return ""; // si no pongo retornar abajo en la consola dice undefined pero esta bien, no es un error, sino que avisa que no retorne nada
// }  

//console.log(tengoClases(dia));



let dia = 'lunes'

let tengoClases = dia => {
	switch (dia) {
        case 'lunes' || 'miercoles' || 'viernes': 
            console.log ('tienes clases');
            break;
        default: 
            console.log ('no tienes clases');
    }
}

console.log(tengoClases(dia));
