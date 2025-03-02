let titulo = document.getElementById("titulo")
titulo.innerText = "Don Quijote de la Mancha"
titulo.style.color = "gray"


let nuevoParrafo = document.createElement("p")
nuevoParrafo.innerText = "Es de las mejores historias que leido en mi vida"

const user = "admin"
const pass = "1234"

function retraso() {
    setTimeout(() => {
        let parrafoSecundario = document.createElement("p")
        parrafoSecundario.innerText = "Voy a aparecer 3s despues"
        document.body.appendChild(parrafoSecundario)
    },3000)
}

function agregaElementos() {
    let nuevoElemento = document.createElement('h3')
    nuevoElemento.innerText = "Año de Publicacion"
    document.body.appendChild(nuevoElemento);
}


function LogIn() {
    let usuario = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(usuario === user && password === pass){
        window.location.href = "bienvenido.html"
    }else{
        alert("Lo siento no eres bienvenido")
    }
}

function mostrarTexto() {
    let userText = document.getElementById("texto").value;
    document.getElementById("mostrar").innerText = userText
}






