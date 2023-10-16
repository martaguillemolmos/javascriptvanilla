// Realiza una aplicación que nos pida un número de ventas a introducir, después nos
// pedirá tantas ventas por teclado como número de ventas se hayan indicado. Al final
// mostrará la suma de todas las ventas. Piensa que es lo que se repite y lo que no.

const numerVentas = parseInt(prompt("Dime el número de ventas"));
let ventas = 0;
let beneficio= 0;

for (let i =>0; i<ventas; i++){
    let beneficio = parteInt(prompt("Dime el beneficio de la venta"));
    if (ventas){
        beneficio +=ventas;
    }
}

console.log(beneficio)


