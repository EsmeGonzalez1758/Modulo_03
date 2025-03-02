//String 
let mensaje = "Hola Mundo";
console.log(mensaje.toUpperCase());

let nombre = "Joel";
console.log(`Hola ${nombre}`)
console.log('Hola ' + nombre + ' Como estas?');
console.log('Hola', nombre, 'Como esta?');

//Boolean
let esMayor = false;
console.log(esMayor && false);

//Arrays
let alumnos = ["Adelina", "Randy", "Saul", "Maria"];
console.log(alumnos[3]);

//Modificar con asignacion
alumnos[2] = "Ian";
console.log(alumnos);

//Añadir
alumnos.push("Natalia")
console.log(alumnos);

alumnos.unshift("Scarlett")
console.log(alumnos);

console.log(alumnos.length);

//Numeros
let x = 2;
x += 5;

console.log(x);

let division = 0;
console.log(division / 0);