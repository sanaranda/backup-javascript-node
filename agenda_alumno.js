// Julian Zarate  15:27
// Hola... intente llevar un poco mas a la practica lo que hicimos ayer, para eso exporte todos mis contactos de gmail, tengo a los teléfonos apuntando a los contactos de gmail, por lo que cada vez q modifico o agrego algún contacto en el teléfono se actualiza en Google.
// se descarga en un .csv, lo pase a json y de ahí escribí el código para pasar parámetros por terminal para buscar un nombre, se invoca colocando en la termimal "node Agenda.js Buscar Jose " y trae todos los Jose q encuentra, si se escribe otra cosa devuelve un mensaje "Para buscar en la Agenda debe usar el comando Buscar y el nombre a Buscar ej. Buscar Jose"
// :aplauso:

// Le dejo el código


const fs = require('fs');
if(process.argv[2]==='Buscar'){
    var agendaJson = fs.readFileSync(__dirname+'/contacts.json','utf-8')
    //console.log(agendaJson);
    var agendaJS = JSON.parse(agendaJson);
    for (let i = 0; i<agendaJS.length;i++){
    //console.log(agendaJS[i].Name);
         if (agendaJS[i].Name.indexOf(process.argv[3]) != -1){
            console.log('Nombre ' + agendaJS[i].Name + ' | Telefono ' +  agendaJS[i].Phone)
            }
    }
    }else{
        console.log('Para buscar en la Agenda debe usar el comando Buscar y el nombre a Buscar ej. Buscar Jose')
}