// Crea una aplicación que nos pida un día de la semana y que nos diga si es un día laboral
// o no. Usa un switch para ello.

let semana = prompt("Dime un día de la semana");

switch (semana) {
  case "lunes":
  case "martes":
  case "miercoles":
  case "jueves":
  case "viernes":
    console.log("es entre semana");
    break;
  case "sabado":
  case "domingo":
    console.log("es fin de semana");
  default:
}
