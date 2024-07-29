let reservaHora
reservaHora = "Reserva de Horas";
console.log (reservaHora);
//Valores de servicios
const ESPACIO =" "
const CORTECABELLO = 12.000;
const CORTEBARBA = 6.000;
const CABELLOYBARBA = 18.000;
const LIMPIEZAFACIAL = 6.000;
const SERVICIOFULL= 23.000;


let nombreCompleto = prompt("Ingrese su Nombre");
console.log("Nombre de Cliente:" +ESPACIO+ nombreCompleto)

let servicio = prompt("Que servicio desea?   Corte de cabello | Corte de Barba | Cabello y Barba | Limpieza Facial | Servicio Full");
console.log("Servicio:" +ESPACIO+ servicio)

//let valor =("valor a pagar: " +ESPACIO+ servicio == s1)

let fecha = prompt("Ingrese Dia - Mes - Año");
console.log("Fecha:" +ESPACIO+ fecha)

let hora = prompt("Ingrese horario: 10:00  |  12:00  | 14:00  |  16:00  |  18:00  |  20:00");
console.log("Horario:" +ESPACIO+ hora)

let telefono = prompt("Ingrese Numero de Celular");
console.log("Celular:" +ESPACIO+ telefono)

let correo = prompt("Ingrese Correo Electronico");
console.log ("Correo:" +ESPACIO+ correo);

function mensajefinal(){
    console.log ("Tu hora a sido agendada, nos vemos pronto!");
 }

mensajefinal("Tu hora a sido agendada, nos vemos pronto!");


