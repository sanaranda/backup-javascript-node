//console.log('hola soy Santiago'.length); // da el numero de caracteres
//console.log('hola soy Santiago'.indexOf('Santiago')); // da el indice de la primera letra del string
//console.log('hola soy Santiago'.slice(2,6)); // devuelve parte del string delimitado entre los dos indices que le digo
//let frase = '    hola soy Santiago   ';
//console.log(frase.trim()); // saca espacios de inicio y final del string
//console.log(frase.split(' ')); // convierte cada parte separada por el ' ' en un elemento de un array
//console.log(frase.replace('Santiago','Silvina')); // reemplaza parte del string que le digo por otro
//function reemplazoFastFast(texto,palabraAnt,palabraNueva){
//    return(texto.replace(palabraAnt,palabraNueva));

function menciona(texto,palabra){
    return (texto.indexOf(palabra)) != -1;// funcion que da tru si hay una palabra en un texto
    }
    
    let licenciada="¡Hola!, soy Carli".slice(12,17);
    console.log(licenciada);
