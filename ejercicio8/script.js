/*
    8. Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el 
    programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de todos ellos.
*/
let n = 1;
let suma = 0;
let cont;
let max, min, promedio;
bandera = true;

while (n !== 0) {
  n = parseInt(prompt("Ingrese su número entero:", 0));

  if (bandera) {
    max = n;
    min = n;
    promedio = 1;
    bandera = false;
    suma += n;
    cont = 1;
  } else if (n === 0) {
    alert("cargando datos...");
  } else {
    suma += n;
    cont++;
    if (n > max) {
      max = n;
    }
    if (n < min) {
      min = n;
    }

    promedio = suma / cont;
  }
}
alert("El máximo número ingresado es: " + max);
alert("El mínimo número ingresado es: " + min);
alert("El promedio es: " + promedio);
