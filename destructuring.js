// SIRVE PARA EXTRAER ELEMENTOS DE ARRAYS SIN USAR LOS INDICES
// SE DECLARAN VARIABLES DEL MISMO NOMBRE QUE LAS ORIGINALES

// let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];
// //let [a,bariloche, c, china] = destinosDelMundo;  // SOLO IMPORTA EN ESTE EJ LOS NOMBRES QUE BUSCO, POR SU POSICION
// let [marruecos, bariloche, barcelona, china, grecia];

// console.log(bariloche); // IMPRIME Bariloche por ser el segundo elemento del array original

// ** SIN USAR DESTRUTURING
// let colores = ['Rojo', 'Azul', 'Amarillo'];
// let azul = colores[1];
// console.log(azul);

// ** USANDO DESTR.
// let colores = ['Rojo', 'Azul', 'Amarillo'];
// let [a, azul, c]= colores;
// console.log(azul);

// ** SIN USAR DESTRUTURING
// let auto = { marca: 'Ford', anio: 1998};
// let marcaAuto = auto.marca;
// console.log(marcaAuto);

// ** USANDO DESTR.
let auto = { marca: 'Ford', anio: 1998};
let {marca, anio} = auto;
console.log(marca);

// ** SE PUEDE CAMBIAR EL NOMBRE DE UNA PROPIEDAD PONIENDO DOS PUNTO
let persona = {nombre: 'Laura', edad: 31, faltas: 3};
let {nombre, faltas: totalFaltas} = persona;
console.log(totalFaltas); // 3









