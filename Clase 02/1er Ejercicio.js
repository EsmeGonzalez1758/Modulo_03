// Comprobación de Par e impar

// Generar un número aleatorio entre 1 y 100
let numero = Math.floor(Math.random() * 100) + 1; 

// Mostrar el número generado en la consola
console.log("Número generado:", numero);

// Verificar si el número es par o impar usando el operador módulo (%)
if (numero % 2 === 0) { 
    // Si el residuo de la división entre 2 es 0, el número es par
    console.log("El número es PAR."); 
} else { 
    // Si el residuo no es 0, el número es impar
    console.log("El número es IMPAR."); 
}
