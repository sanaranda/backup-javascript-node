// /// mismo ejemplo pero while y do while

// let diaSemana = 1;
// while (diaSemana <= 7) {
//  console.log('Día de la semana N° ' + diaSemana);
//  diaSemana++;
// }


// let diaSemana = 1;
// do {
//  console.log('Día de la semana N° ' + diaSemana);
//  diaSemana++;
// } while (diaSemana <= 7)


// function contar(desde, hasta) {
//     while(desde<hasta){
//             console.log("El número actual es "+ numero + " y es menor a " + hasta)
//     }
//    }



//    function encontreUn5(numeros){
//     let i=0;
//     do{
//         console.log(numeros[i]);
//         i++;
//     } while (numeros[i] !=5);
//     console.log("Se encontró un 5!")
// }

function tablaDeMultiplicar(numero) {
    let i = 0;
    while(i<=10){
        console.log(numero + ' * ' + i + ' = ' + numero*i);
        i++;
    }
}

tablaDeMultiplicar(8);
