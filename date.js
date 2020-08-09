// OBJETO DATE
//var fechaActual = new Date;
//  console.log(fechaActual); // 2020-08-07T21:09:04.424Z
//  console.log(fechaActual.toUTCString()); // Fri, 07 Aug 2020 21:10:47 GMT
//  console.log(fechaActual.getFullYear()); // 2020
//  console.log(fechaActual.getMonth()); // 7, ya que Agosto es el mes 7 y enero 0
//  console.log(fechaActual.getDate()); // 7 ya que es 7 de Agosto
//  console.log(fechaActual.getDay()); // 5 ya que es viernes y domingo es el 0
// crear instancia..
// var miFechaCumple = new Date(1983,11,24); //anio, mes, dia numero

// setear una fecha por pedazos
// let fecha = new Date;
// fecha.setYear(2020);
// fecha.setMonth(7);
// fecha.setDate(4);

var fechaActual = new Date;
var diaSemana = fechaActual.getDay();
var diaNumero = fechaActual.getDate();
var mes = fechaActual.getMonth();
var anio = fechaActual.getFullYear();

var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
var dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

 console.log('Hoy es '+ dias[diaSemana] + ' ' + diaNumero + ' de ' + meses[mes] + ' del anio ' + anio);
