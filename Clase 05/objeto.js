const persona = {
    nombre: "Ivan",
    edad: 23,
    ciudad: "Ciudad de Mexico"
}

//Modificacion de valores
persona.ciudad = "Orizaba"

//Añadir valores
persona.genero = "Masculino"
persona.estatura = 1.75

delete persona.estatura

//Objetos con metodos
const coche = {
    marca: "Chevrolet",
    modelo: "Aveo 2025",
    color: "gris",

    arrancar: function(marca) {
        console.log("El coche esta andando", marca);
    }
}


//Metodo abreviado
const calculadora = {
    suma(x,y) {
        return x + y
    }
}

const trabajo = {
    nombre: "bbva",
    puesto: "Software Engineer",
    ubicacion: {
        ciudad: "Ciudad de Mexico",
        calle: "Reforma",
        pais: "Mexico"
    }
}

trabajo.ubicacion.calle = "Reforma, Cuathemoc"


const usuario = {
    nombre: "Saul",
    saludar: function() {
        console.log(`Hola soy ${this.nombre}`);
    }
}

usuario.saludar();


//Molde de objetos
class Persona{ //Padre
    constructor(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`);
    }
}

class Estudiante extends Persona{ //Hijo
    constructor(nombre, edad, genero, carrera, promedio) {
        super(nombre, edad, genero)
        this.carrera = carrera;
        this.promedio = promedio;
    }

    estudiar(){
        console.log(`${this.nombre} esta estudiando en ${this.carrera}`);
    }
}


const AnaPaola = new Estudiante("Ana", 24, "Femenino", "Enfermeria", 10)
AnaPaola.estudiar();
AnaPaola.saludar()