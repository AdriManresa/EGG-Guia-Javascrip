/*
Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring().
*/
function agregarEspacios(frase) {
  let fraseConEspacios = "";

  for (let i = 0; i < frase.length; i++) {
    if (i == frase.length - 1) {
      fraseConEspacios += frase.substring(i, i + 1);
    } else {
      fraseConEspacios += frase.substring(i, i + 1) + " ";
    }
  }
  return fraseConEspacios;
}

let frase = prompt("Ingresa una frase");

let fraseConEspacios = agregarEspacios(frase);

alert(`La frase con espacios\n${fraseConEspacios}`);
