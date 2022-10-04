/*10. Escribir una función flecha que reciba una palabra y la devuelva al revés.*/ 

let fraseAlReves = frase => frase.split("").reverse().join("");

let frase = prompt("Ingrese una frase:","Acá ingrese su frase...");

let fraseInvertida = fraseAlReves(frase);

alert(fraseInvertida);