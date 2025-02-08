let nota = 5;
const notaAprobatoria = 6;

if(nota >= notaAprobatoria){
    console.log("Estas aprobado");
} else{
    console.log("Estas reprobado");
}

let temp = 10;

if(temp >= 30) {
    console.log("Te estas derritiendo de calor");
} else if(temp >= 21 && temp <= 29) {
    console.log("Esta haciendo un clima agradable");
} else {
    console.log("Te estas congelando");
    
}

// OPERADOR TERNARIO: Hacer lo mismo pero en una sola linea
let edad = 25;
let resultado = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
console.log(resultado);

let resultado2 = (nota >= notaAprobatoria) ? "Estas aprobado" : "Estas reprobado"
console.log(resultado2);

let dia = 'lunes';
switch(dia){
    case 'lunes':
        console.log('Inicio semana');
        
    case 'jueves':
        console.log('Jueves chido');
        break;
    default:
        console.log('No se que dia es hoy');
}


// CREAR VALORES ALEATORIOS:
let valorRandom = Math.floor(Math.random() * 101); /**
                                                    * floor redondea valores
                                                    * * 101 dara valores entre 0 y 100
                                                   */
console.log(valorRandom);