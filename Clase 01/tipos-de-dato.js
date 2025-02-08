// Muestra un mensaje en la consola
console.log('Hola Mundo'); 

// Tipos de datos primitivos en JavaScript
let apellido = "Arrieta"; // Tipo String (cadena de texto)
let dia = 17; // Tipo Number 
let esMujer = true; // Tipo Boolean (verdadero o falso)
let Peso; // Tipo Undefined (variable declarada pero sin valor asignado)
let estatura = null; // Tipo Null 
let id = Symbol("id"); // Tipo Symbol (valor único, usado para identificadores)
let Angulo = 2399963229728653n; // Tipo BigInt (número grande para cálculos de precisión)

// Mostrar el tipo de cada variable en la consola
console.log(typeof apellido); // string
console.log(typeof dia); // number
console.log(typeof esMujer); // boolean
console.log(typeof Peso); // undefined
console.log(typeof estatura); // object (por una peculiaridad de JavaScript, aunque es null)
console.log(typeof id); // symbol
console.log(typeof Angulo); // bigint

// Mostrar los valores de las variables en la consola
console.log(apellido);
console.log(dia);
console.log(esMujer);
console.log(Peso);
console.log(estatura);
console.log(id);
console.log(Angulo);

// Declaración de un objeto llamado 'direccion' con varias propiedades
let direccion = {
    calle: "Tochcalli",
    Manzana: 465,
    Lote: 7,
    colonia: "saraperos",
};

// Acceder a las propiedades del objeto 'direccion' e imprimirlas en la consola
console.log(direccion.calle);
console.log(direccion.Manzana);
console.log(direccion.Lote);
console.log(direccion.colonia);

// Mostrar la dirección completa en una cadena formateada
console.log(`Dirección: Calle ${direccion.calle}, Manzana ${direccion.Manzana}, 
Lote ${direccion.Lote}, Colonia ${direccion.colonia}.`);

// Declaración de un array con números decimales
let numerosdecimales = [2.5, 4.6, 6.8, 8.1, 10.6];

// Imprimir el array completo
console.log(numerosdecimales);

// Acceder e imprimir el tercer elemento del array (índice 2)
console.log(numerosdecimales[2]);

// Definición de una función de resta
let resta = function resta(a, b) { 
    return a - b; 
};

// Llamar a la función 'resta' con los valores 17 y 4
console.log(resta(17, 4)); // Devuelve 13

// Crear un objeto 'Date' para obtener la fecha y hora actual
let fecha = new Date();

// Imprimir la fecha y hora actual
console.log(fecha);
