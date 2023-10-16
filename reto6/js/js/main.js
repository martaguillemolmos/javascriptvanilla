// Lee un número por teclado que pida el precio de un producto (puede tener decimales) y
// calcule el precio final con IVA. El IVA será una constante que sera del 21%.


let a = parseFloat(prompt("Introduce valor del producto"));

let b = ((a)*(0.21))+ (a);

console.log (b);

