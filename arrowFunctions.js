// declaracion standard
function laMitad(numero){
    return numero/2
}

// declaracion tipo arrow function
let lamitad = numero => numero/2;

console.log(laMitad(2));
console.log(lamitad(2));

let dividir = (numA, numB) => numA / numB;

console.log(dividir(4,2));

let saludo = () => 'Hola mundo';
console.log(saludo());

//como saber hora actual
let horaActual = () => {
    let fecha = new Date(); //llamo al constructor de objetos con new y creo un objeto Date
    return fecha.getHours() + ':' + fecha.getMinutes(); // invoco al metodo getHours y getMinutes del objeto fecha
    } 
 console.log(horaActual());
 