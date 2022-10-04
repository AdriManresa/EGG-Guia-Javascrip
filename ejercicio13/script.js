/*Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript. */

const RESULTADO = document.getElementById("resultado");
const BUTTON = document.getElementById("button");

let persona = {
  nombre: "Adriana",
  edad: 23,
  sexo: "Femenino",
  peso: 100,
  altura: "1.70",
};

function mostrar() {
  RESULTADO.innerHTML = `El nombre es: ${persona.nombre} <br> La edad es: ${persona.edad} <br> El sexo es: ${persona.sexo} <br> El peso es: ${persona.peso} <br> La altura es: ${persona.altura}`;
}
