/*
    11. Escribir una función que reciba un String y devuelva la palabra más larga. 
    String Ejemplo: “Guia de JavaScript”
    Resultado esperado : “JavaScript”
*/

function devolverPalabraMasLarga(frase) {
    
    let palabras = frase.split(" ");
    let maximaLongitud;
    let bandera = true;
    let palabraMasLarga;

    for (const palabra of palabras) {
        if(bandera){
            maximaLongitud = palabra.length;
            palabraMasLarga = palabra;
            bandera = false;
        } else {
            if (palabra.length>maximaLongitud){
                maximaLongitud = palabra.length;
                palabraMasLarga = palabra;
            }
        }
    }

    return palabraMasLarga;

}

let fraseUsuario = prompt("Ingrese su frase:", "Ingrese su frase acá...");

let palabraMasLarga = devolverPalabraMasLarga(fraseUsuario);

(palabraMasLarga == "") ? alert("Lo siento, ha ingresado una frase inválida") : alert("La palabra más larga, de su frase, es: " + palabraMasLarga);