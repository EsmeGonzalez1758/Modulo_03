//Funcion sin parametro
function saludar(){
    console.log("Hola Mundo!");
}

//Funcion con parametros
function saludarAlguien(nombre){
    console.log("Hola ", nombre, "!");
}

//Funcion con valor por defecto
function saludarInvitado(nombre = "invitado"){
    console.log("Hola, Bienvenido", nombre);
}

//Funcion retorna 
function multiplicar(a, b){
    return a * b;
}


let resultado = multiplicar(63, 5);
console.log(resultado);