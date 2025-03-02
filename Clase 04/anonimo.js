//Funcion anonima
const anonima = function(){
    console.log("Hola a todos!");   
}

anonima();

//Callback
setTimeout(function(){
    console.log("Este comentario va a tener un tiempo de espera");
}, 2000);


//Arrow Function
const arrow = () => {
    console.log("Hola es una flecha =>");
}

arrowFunction();


document.getElementById("boton").addEventListener("click", function(){
    alert("Hola Mundo!")
})