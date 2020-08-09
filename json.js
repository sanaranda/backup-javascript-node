let amigosArray = ['Sebas','Rulo','Juan'];
let amigosJson = JSON.stringify(amigosArray);
console.log(amigosJson); // ["Sebas","Rulo","Juan"]

let amigosOriginal = JSON.parse(amigosJson);
console.log(amigosOriginal); //[ 'Sebas', 'Rulo', 'Juan' ]


