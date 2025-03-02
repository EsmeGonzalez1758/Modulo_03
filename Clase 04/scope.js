var globalVar = "Soy una variable global"

function saludar() {
    console.log(globalVar);
}

saludar();

//Funcion Scope
function saludo(){
    let mensaje = "Hola a todos!!"
    console.log(mensaje);
}

saludo()
console.log(mensaje);

//Block Scope
if(true){
    var blockScope = "Solo existe en este bloque"
    console.log(blockScope);
}

console.log(blockScope);

console.log(variable);
var variable = 'Hola!'



//Palindromo
function palindromo(palabra){
    let arr =  palabra.split("");
    arr.reverse();
    let palabraNew = arr.join("");
    if(palabra==palabraNew){
        console.log(palabra,'Es un polindromo');
    }
    return palabra==palabraNew;
}

let palabras = [
  "oso", "reconocer", "anilina", "arenera", "radar", // Palíndromos
    "sol", "luz", "casa", "perro", "gato",
  "amor", "roma", "rotor", "sometemos", "neuquén", // Palíndromos
    "programar", "javascript", "computadora", "cielo", "hola"
];
palabras.forEach(element => palindromo(element));


//Filtrar los numeros mayores de un numero 
let lista = [1,2,54,65,46,87,4,2,45,2,3,4,57,6,4,32,13,5,6,]
let listaMayores = []

function mayor(){
    for(i=0; i<lista.length; i++){
        if(lista[i]>5){
            listaMayores.push(lista[i])
        }
    }    
    console.log(listaMayores);
}
mayor()

//Area de un circulo
function calcularAreaCirculo(radio) {
    if (radio <= 0) {
        return "El radio debe ser mayor que cero.";
    }

    let area = Math.PI * Math.pow(radio, 2); // π * r^2
    return `El área del círculo con radio ${radio} es: ${area.toFixed(2)}`;
}

// Probamos la función
console.log(calcularAreaCirculo(5)); // Radio de ejemplo

