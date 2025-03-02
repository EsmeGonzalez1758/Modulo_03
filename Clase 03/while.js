let contador = 0;

//Sintaxis While
while(contador < 10){
    console.log(contador);
    contador++;
}


//Sintaxis do while
let numero = 0;
do{
    console.log("Ejecuto mi programa al menos una vez");
    numero++
}while(numero < 1)


//Sintaxis For
let variable = 0;
for(let i = 1; i < 10; i++){
    variable += i
}

console.log("La suma total es: ", variable);



//For Ejercicios
const numeros = [10, 15, 47, 80, 25];
for(let num of numeros){
    console.log(num);
}


//Do while
let respuesta;
do {
    respuesta = parseInt(prompt("Por favor ingresa un número mayor a 20"));
} while (respuesta <= 20);
alert("El número es: " + respuesta);


//While
let text = "Este modulo es increible por que estoy aprendiendo a programar!!!"
let vocal = "aeiouAEIOU"
let counter = 0;
let i = 0;

while(i < text.length){
    if (vocal.includes(text[i])) {
        counter++;
    }
    i++;
}

console.log("El texto tiene: ", counter , " vocales");


//Contador 
function mostrarDigitosFor(numero) {
    let numStr = numero.toString(); // Convertimos el número a string
    console.log(`Los dígitos de ${numero} son:`);
    for (let i = 0; i < numStr.length; i++) {
        console.log(numStr[i]);
    }
}
// Llamar a la función con el número deseado
mostrarDigitosFor(960913);
//Suma de digitos 
function sumarDigitos(numero) {
    let numStr = numero.toString(); // Convertimos el número a string
    let suma = 0;
    for (let i = 0; i < numStr.length; i++) {
        suma += parseInt(numStr[i]); // Convertimos cada carácter a número y lo sumamos
    }
    console.log(`La suma de los dígitos de ${numero} es: ${suma}`);
}
// Llamar a la función con el número deseado
sumarDigitos(960913);