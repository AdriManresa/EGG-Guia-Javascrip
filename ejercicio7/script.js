function limitePositivo(numeroLimitePositivo) {
  let sumaNumeros = 0;

  while (sumaNumeros <= numeroLimitePositivo) {
    let numeroUsuario = parseInt(prompt("Ingrese su numero"));

    sumaNumeros += numeroUsuario;
  }
  sumaNumeros >= numeroLimitePositivo ? alert("¡Llegaste al límite!") : alert("Ha ocurrido un error, al ignresar el número");

}
let numeroUsuario = parseInt(prompt("Ingrese un valor numeríco, para el límite positivo:"));

limitePositivo(numeroUsuario);