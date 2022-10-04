function numeroParOImpar(n){
  if (n === 0) {
    alert("el numero no par ni impar");
  } else if (n % 2 === 0) {
    alert("el numero es par");
  } else if (n % 2 === 1) {
    alert("el numero es impar");
  } else {
    alert("el numero ingresado es incorrecto");
  }
}

let n = parseInt(prompt("Ingrese un numero: ",0)); 

numeroParOImpar(n);