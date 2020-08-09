

const fs = require('fs');

let tareasJson = fs.readFileSync("./tareas.json", "UTF-8");

let tareasJs = JSON.parse(tareasJson); // convierte Json a objetos, es un array de objetos

//console.log(tareasJs);

let accion = process.argv[2];
var flag = 0;

if (accion === "listar") {                                         //si esta el comando "listar" luego de node app.js y no pongo otro comando luego, solo lista las tareas
    if (typeof process.argv[3] =='undefined'){                     
    console.log( tareasJs);                                         //sin solo puse listar me lista todo, el undefined es porque no hay nada luego de listar
         }
         else{                                                     //aca entra si hay algo luego de listar
            
            for (let i = 0; i < tareasJs.length; i++){              //se fija si es un comando conocido
                switch(process.argv[3]){
                   case 'titulo':
                       console.log('Titulo de tarea ' + (i+1) + ' es ' + tareasJs[i].titulo)
                   break;
                   case 'estado':
                       console.log('Estado de tarea ' + (i+1) + ' es ' + tareasJs[i].estado)
                   break;
                   default:
                   flag = 1;                                        //si no hubo comandos conocidos hubo un erro y tengo que avisar, no lo pongo aca el aviso por que esta en el for  lo imprime muchas veces
                    }
                
                }
            }
            if(flag==1){
                console.log("Error en segundo comando, use las palabras titulo o estado luego de listar") // sin se escribio mal el segundo parametro entonces aviso
            }
               
}else{
    console.log("No hubo ningun comando, use listar para ver todas o listar titulo o listar estado para verlos"); //si no entro ningun comando
}
