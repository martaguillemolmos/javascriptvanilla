// Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo
// aritmético (String), según este último se realizará la operación correspondiente. Al final
// mostrará el resultado en un cuadro de diálogo.
// Los signos aritméticos disponibles son:
// +: suma los dos operandos.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)
// ^: 1o operando como base y 2o como exponente.
// %: módulo, resto de la división entre operando1 y operando2.



function calculadora() {
    let a = prompt("Introduce operando 1");
    let b = prompt("Introduce operando 2");
    let c = prompt ("Introduce un operador");
    if (c === "+" || c === "-" || c == "/" || c == "*" || c == "^" || c == "%") {
        let resultado = `${parseFloat(a)}${c}${parseFloat(b)}`
        alert(eval(resultado))
    } else {
        alert("introduce un operador + o -")
    }
}


calculadora()


