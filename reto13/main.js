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
  let operando1 = prompt("Introduce operando 1");
  let operando2 = prompt("Introduce operando 2");
  let operador = prompt("Introduce un operador");
  if ((operando1 != "") & (operando2 != "") & (operador != "")) {
    
    if (
      operador === "+" ||
      operador === "-" ||
      operador == "/" ||
      operador == "*" ||
      operador == "^" ||
      operador == "%"
    ) {
      let resultado = `${parseFloat(operando1)}${operador}${parseFloat(
        operando2
      )}`;
      alert(eval(resultado));
    } else {
      alert("Introduce un operador válido: +, -, /, *, ^ o %");
    }
  } else {
    alert("Introduce un número o un operador");
  }
}
calculadora();
