/*
    2. Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio 
    de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que 
    para calcular el área y el perímetro se utilizan las siguientes fórmulas: 
    area = PI * radio2 
    perimetro = 2 * PI * radio 
 */

    let radio = prompt("Ingrese el valor de su radio",0);

    let area = (Math.PI * (Math.pow(radio,2))).toFixed(2);
    
    let perimetro = (2 * Math.PI * radio).toFixed(2);
    
    console.log(`El área de su circunferencia es: ${area}`);
    console.log(`El perímetro de su circunferencia es: ${perimetro}`);