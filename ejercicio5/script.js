function sumar(n1, n2) {
  return n1 + n2;
}
function restar(n1, n2) {
  return n1 - n2;
}
function multuplicar(n1, n2) {
  return n1 * n2;
}
function dividir(n1, n2) {
  return n1 / n2;
}
function elegirLosNumeros() {
  //parseInt:Convierte "parsea" un argumento de tipo cadena y devuelve un entero de la base especificada.
  let n1 = parseInt(prompt("Ingrese su número 1:", 0));

  let n2 = parseInt(prompt("Ingrese su número 2:", 0));

  let numeros = [n1, n2];

  return numeros;
}
function menu() {
  let numeros = [];

  switch (opc) {
    case "s":
      numeros = elegirLosNumeros();

      let suma = sumar(numeros[0], numeros[1]);

      alert("La suma de sus números es: " + suma);

      break;

    case "m":
      numeros = elegirLosNumeros();

      let resta = restar(numeros[0], numeros[1]);

      alert("La resta de sus números es: " + resta);

      break;

    case "d":
      numeros = elegirLosNumeros();

      let division = dividir(numeros[0], numeros[1]);

      alert("La división de sus números es: " + division);

      break;

    default:
      alert("Lo siento, ha ingresado una opción incorrecta");

      break;
  }
}
let opc = prompt(
  "¿Qué opción va a elegir? \n 1. Sumar (S/s) \n 2. Restar (R/r) \n 3. Multiplicar (M/m) \n 4. Dividir (D/d)").toLowerCase();

menu(opc);
