console.log('Hola Mundo');


//tipo de dato primitivos
let nombre= "Ivan";
let edad= 23;
let esMayordeEdad= true;
let saldo;
let cuenta= null;
let id= Symbol("id");
let numeroGrande = 1248240352475757539n;

console.log(typeof cuenta);

/** 
 * Una variable que funciona como objeto
 * 
 * Nota:Guardo la informacion de una persona 
*/

let persona = {
    nombre: "Ivan",
    edad: 23,
    nacionalidad: "Mexicano"
}

console.log (persona.edad);

let numeros = [1,2,3,4,5]
console.log (numeros[0]);

let suma = function multiplicacion (a,b) {return a+b}
console.log(suma(2,5));

let fecha = new Date();
console.log(fecha);