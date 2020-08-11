let listadoDeComandos = 
['Comando desconocido, este es el listado de comandos: ',
'listar titulos',
'listar todo', 
'filtrar pendiente' ,
'filtrar en_progreso' , 
'filtrar terminada',
'crear "Titulo" "Descripcion"' , 'Cuidado, poner entre comillas si hay espacios en frases. El estado sera siempre pendiente'] 

const funciones = require('./funciones')  // requiere las funciones dentro de este archivo funciones.js

let comando1 = process.argv[2]; // asigno a la var accion el tercer argumento de la linea de comando node app.js xxxx, node es 0, app.js es 1 y xxxx es 2, si ponemos otro separado de espacio seria el 3, etc
let comando2 = process.argv[3]; // segundo argumento o comando
let comando3 = process.argv[4]; // tercer argumento o comando
let tareas = funciones.leerJSON(); // leo arhivo Json y lo dejo en formato objeto, o sea, lo Parseo

function Tarea (titulo, estado, descripcion){ // funcion constructora de objetos, se usa Mayuscula para el nombre del tipo de objeto creado
    this.titulo = titulo;
    this.estado = estado;
    this.descripcion = descripcion;
    };

    switch (comando1) {   // veo cual es el primer comando
    case 'listar':
        if(((comando2 == 'titulos') || (comando2 == 'todo')) && (typeof comando2 != 'undefined')){ // valido si el segudo comando esta correcto y sino aviso
            switch (comando2) {   
            case 'titulos':
                tareas.forEach((elemento,i) => {    //se puede pasar el index como segundo parametro en forEach
                console.log("Titulo " + (i+1) + " = " + elemento.titulo)});
            break;
            case 'todo':
                tareas.forEach((elemento,i) => {    
                console.log("Titulo " + (i+1) + " = " + elemento.titulo + " / Descripcion " + (i+1) + " = " + elemento.descripcion + " / Estado " + (i+1) + " = " + elemento.estado)});
            break;
            }
    break;
        }else {console.log('Falto segundo comando');}
    break;  
    
    case 'filtrar':                                                    // si en vez de poner listar pongo filtrar y luego el estado, me lista todas las tareas con ese estado
        if((comando2 != 'pendiente') && (comando2 != 'en curso') && (comando2 != 'terminada') && (typeof comando2 != 'undefined')){
        console.log("Verificar como escribiste el estado por favor"); //avisa que algo se escribio mal , pero si no se escribio nada pasa el if de abajo
        break
        }
        if(typeof comando2 == 'undefined'){                            // si no se escribio nada entonces aviso
            console.log("Falta ingresar que estado queres filtrar");
            break 
        } 
        
        tareas.forEach(elemento => { 
            if (elemento.estado === comando2){          // si el estado es igual a la palabra que pongo luego de filtra, entonces lo imprime
            console.log(elemento.titulo);
            }
        })
    break;        

    case 'crear':
        if((typeof comando2 != 'undefined') && (typeof comando3 != 'undefined')){
            let nuevaTarea = new Tarea (comando2, "pendiente", comando3 ); // hacer objeto tarea nuevo
            tareas.push(nuevaTarea);                                       // meterla en el array de tareas                                         
            let tareasJson = JSON.stringify(tareas);                       // pasar el array de tareas a formato Json
            funciones.escribirJSON(tareasJson);
            console.log('Tarea agregada!');                            // ahora que esta en Json, pisar el archivo tareas.json viejo
        }else{
            console.log("Falto Titulo y/o Descripcion");
        };                        
        break;
            
    default:
        console.log(listadoDeComandos) // si no se puso un comando conocido, le doy la lista de los comandos actuales
        
        break;
    }
