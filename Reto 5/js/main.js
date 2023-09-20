// Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también
// debemos indicarlo.

let a = parseFloat(prompt("Introduce número"));
let b = (a % 2);

if (b == 0) {
// Nota, para poder decir que el número es igual, debemos de poner ==, en vez de =.
    alert("Es divisible entre 2");

} else{
    alert("No es divisible entre 2");
}


