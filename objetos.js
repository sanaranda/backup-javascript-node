//let tenista = {
//    nombre: 'Roger',
//    apellido: 'Federer',
//    edad: 38,
//    saludar: function() {
//    return '¡Hola! Me llamo Roger';
//    }
//    };


    let tenista = {
        nombre: 'Roger',
        apellido: 'Federer',
        edad: 38,
        saludar: function() {
        return '¡Hola! Me llamo ' + this.nombre; // uso this. para llamar propiedades o metodos de este objeto
        }
        };
    console.log(tenista.saludar());


    function Auto(marca, modelo){ // funcion constructora de objetos, se usa Mayuscula para el nombre del tipo de objeto creado
        this.marca = marca;
        this.modelo = modelo;
        };

    let miAuto = new Auto('Huyndai',2019); // Instancio o creo un objeto con las propiedades particulares
    console.log(miAuto);
    let suAuto = new Auto('Honda',2011); // Instancio o creo un objeto con las propiedades particulares
    console.log(suAuto);

