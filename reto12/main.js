// Escribe una aplicación con un String que contenga una contraseña cualquiera. Después
// se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá
// más la contraseña y mostrará un mensaje diciendo “Enhorabuena”. Piensa bien en la
// condición de salida (3 intentos y si acierta sale, aunque le queden intentos).

let pass= "contraseña";

  for (let i = 0; i <= 3; i++) {
        usuario = prompt("Escribe el pass")
        if(pass === usuario){
            console.log("Enhorabuena")
            break;
        }
    }
