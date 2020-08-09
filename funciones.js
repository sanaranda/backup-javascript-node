const fs = require('fs'); //fs es el modulo File System

module.exports = {
    archivo: './tareas.json', // aca en realidad va un path
    leerJSON: function(){
        return JSON.parse(fs.readFileSync(this.archivo, 'UTF-8')); //toma el Json y lo tranforma en array de Objetos
    },
    escribirJSON: function(tareaString){  // recibe el objeto nuevo a agregar en formato string
        return fs.writeFileSync(this.archivo, tareaString) // sobre escribe y pisa lo anterior
    }
    
}

//module.exports = funciones;

// o puede ser tambien

// const funciones = {
// }
