  
// *** MAP  NO CAMBIA LOS ARRAYS QUE TOCA PERO RETORNA UN NUEVO ARRAY CON LO QUE MODIFICO
// var numeros = [2, 4, 6];
// var dobleNumeros = numeros.map(function(num){ /// HAY que usar la palabra reservada FUNCTION
// return num * 2;
// });
// console.log(dobleNumeros); // imprime [4,8,12]

// const frutas = ['manzana', 'mandarina']  
// frutas.map((unidad) => console.log(unidad)) // manzana y mandarina en otro renglon

// const frutas = ['manzana', 'mandarina'] 
// let nuevoArray = frutas.map((unidad) => (unidad + ' # ')) 
// console.log(nuevoArray);                                  //[ 'manzana # ', 'mandarina # ' ]
// console.log(frutas);                                      // [ 'manzana', 'mandarina' ]

// *** FILTER
var edades = [22, 8, 17, 14, 30];
var mayores = edades.filter(function(edad){  // HAY que usar la palabra reservada FUNCTION si declar la funcion tradicionalmente y no como arrow
return edad > 18;
});
console.log(mayores); // imprime [22, 30]

//con arroy function
var edades = [22, 8, 17, 14, 30];
var mayores = edades.filter(edad => edad > 18);  // HAY que usar la palabra reservada FUNCTION
console.log(mayores); // imprime [22, 30]



// const frutas = ['manzana', 'mandarina'] 
// const frutasFiltradas = frutas.filter((elemento) => elemento === 'manzana')
// console.log(frutasFiltradas) //[ 'manzana' ]



// *** REDUCE
// var numeros = [5, 7, 16];
// var suma = numeros.reduce(function(acum, num){   // HAY que usar la palabra reservada FUNCTION
// return acum + num;
// });
// console.log(suma); // imprime 28

// otra forma de hacerlo con arroy functions

// var numeros = [5, 7, 16];

// var suma = numeros.reduce((acum, num) => (acum = acum + num)); // el método reduce para obtener la sumatoria

// console.log(suma); // imprime 28


// *** FOR EACH , SI MODIFICO ALGO SOBRE EL ARRAY ORIGINAL, ENTONCES LO DEJA CAMBIADO, ESTO ES PELIGROSO
// var paises = ['Argentina', 'Brasil', 'Colombia'];
// paises.forEach(function(pais){                             // HAY que usar la palabra reservada FUNCTION
// console.log(pais);
// });

// const frutas = ['manzana', 'mandarina']  // ver que puedo no usar punto y coma
// frutas.forEach((unidad) => console.log(unidad)) // manzana y mandarina en otro renglon
// funciona igual que map
// const frutas = ['manzana', 'mandarina']  
// frutas.map((unidad) => console.log(unidad)) // manzana y mandarina en otro renglon

//ACA ABAJO SE VE QUE EL FOR EACH DEVUELVE UN NUEVO ARRAY MODIFICADO, PARA HACER COSAS CON BASES DE DATOS USAR MAP PARA NO CAMBIARLO 
const frutas = ['manzana', 'mandarina'] 
let nuevoArray = frutas.forEach((unidad) => (unidad + ' # ')) 
console.log(nuevoArray);                                  // undefined, el foreach no devuelve un nuevo array !!!! salvo que ponga return
console.log(frutas);                                     // [ 'manzana', 'mandarina' ]


