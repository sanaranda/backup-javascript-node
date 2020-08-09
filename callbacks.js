// //OK
// function nombreCompleto(nombre, apellido) {
// return nombre + ' ' + apellido;
// };

// function iniciales(nombre, apellido) {
//     return nombre[0] + apellido[0];
//     };

// function saludar(nombre, apellido, callback) {
// return '¡Hola ' + callback(nombre, apellido) + '!';
// };

// console.log(saludar('Juanito', 'Sánchez', nombreCompleto));
    
// console.log(saludar('Juanito', 'Sánchez', iniciales)); //// Devolverá '¡Hola JS!'



// OK, abajo dos formas, una usando arrow functions y la otra con la declaracion normal
// let doble = numero => numero*2;
// let triple = numero => numero*3;
// let apply = (callback, numero) => callback(numero); // NO HACE FALTA USAR LA PALABRA CALLBACK, va el nombre que yo quiera
//console.log(apply(triple,5));


//OK
// function doble(numero){
//     return numero*2;
// }
// function triple(numero){
//     return numero*3;
// }
// function apply(callback, numero){
//    return callback(numero);
// }
//console.log(apply(triple,5));

// //OK
// let sumar = (n1,n2) => n1+n2;
// let restar = (n1,n2) => n1-n2;
// let multiplicar = (n1,n2) => n1*n2;
// let dividir = (n1,n2) => n1/n2;

// let calculadora = (operacion, n1, n2) => operacion(n1,n2);

// console.log(calculadora(restar, 2,3));


//OK
function agregarHttp(url) {
    return 'http://' + url
}

function procesar(arrayUrls,callback){
   let arrayFinal = [];
    for(let i=0 ; i < arrayUrls.length ; i++){
        arrayFinal.push(callback(arrayUrls[i]));
    }
    return arrayFinal;
}

console.log(procesar(["www.google.com","www.yahoo.com"],agregarHttp));
