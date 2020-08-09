// *** MEZCLAR O CONCATENAR ARRAYS

// let clubesUno = ['Boca', 'River', 'Racing'];
// let clubesDos = ['San Lorenzo', 'Lanús', 'Gimnasia'];
// let todosLosClubes = [...clubesUno, ...clubesDos];
// console.log(todosLosClubes); //[ 'Boca', 'River', 'Racing', 'San Lorenzo', 'Lanús', 'Gimnasia' ]

// let parte = ['los', 'cumplas'];
// let oracion = ['Que', ...parte, 'feliz'];
// console.log(oracion); 


// *** MEZCLAR O CONCATENAR OBJETO

// let auto = {marca:'Ferrari', kms:0, anio:2019};

// let corredorUno = {nombre:'Vettel', edad:32, ...auto};
// let corredorDos = {nombre:'Leclerc', edad:21, ...auto};

// console.log(corredorDos); //{ nombre: 'Leclerc', edad: 21, marca: 'Ferrari', kms: 0, anio: 2019 }


// // *** EN FUNCIONES.... ESTE CASO ES MUY UTIL, PARA ENCONTAR EL NUMERO MENOR SIN SABER LA CANTIDAD DE PARAMETROS

// let notas = [9.3, 8.5, 3.2, 7, 10];
// let elMenor = Math.min(...notas);   // Math.min devuelve el menor de los numeros de un array
// console.log(elMenor);



// *** PARAMETRO REST MUY IMPORTANTE PARA DECLARAR FUNCIONES CON CUALQUIER NUMERO DE PARAMETROS

// function miFuncion(param1, param2, ...otros) {
//     return otros;
//     }

// console.log(miFuncion('a', 'b', 'c', 'd', 'e')); // retornará ['c', 'd', 'e']


// *** EJEMPLO MUY UTIL, FUNCION QUE SUMA TODOS LOS NUMEROS SIN SABER LA CANTIDAD

function sumar(...numeros) {
       return numeros.reduce((acum, num) => acum += num); // el método reduce para obtener la sumatoria 
    // lo mismo que escribir  numeros.reduce((acum, num) => (acum = acum + num));
    }

    console.log(sumar(1, 4)); // devuelve 5
    console.log(sumar(13, 6, 8, 12, 23, 37)); // devuelve 99


//TAMBIEN SE PUEDE PONER CON OTROS PARAMETROS PERO LOS ... DEBEN IR ULTIMOS YA QUE AGARRA LOS ULTIMOS PARAMETROS SIEMPRE, SINO DA ERROR
//ESTO DA ERROR
function sumar(...numeros, otroParámetro) {
    // Utilizamos el método reduce para obtener la suma
    return numeros.reduce((acum, num) => acum += num);
    }
    