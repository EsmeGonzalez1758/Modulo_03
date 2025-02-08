// Generar un número aleatorio entre 1 y 12 (representando los meses del año)
let optionRandom = Math.floor(Math.random() * 12) + 1;

// Variable para almacenar la estación correspondiente
let opcion;

// Evaluar el mes con switch-case para determinar la estación del año
switch (optionRandom) {
    case 12: // Mes de diciembre
    case 1:  // Mes de enero
    case 2:  // Mes de febrero
        opcion = "Invierno"; // Asignar estación Invierno
        break;

    case 3:  // Mes de marzo
    case 4:  // Mes de abril
    case 5:  // Mes de mayo
        opcion = "Primavera"; // Asignar estación Primavera
        break;

    case 6:  // Mes de junio
    case 7:  // Mes de julio
    case 8:  // Mes de agosto
        opcion = "Verano"; // Asignar estación Verano
        break;

    case 9:  // Mes de septiembre
    case 10: // Mes de octubre
    case 11: // Mes de noviembre
        opcion = "Otoño"; // Asignar estación Otoño
        break;

    default:
        opcion = "No encontrada"; // En caso de error (esto nunca debería 
        // ocurrir con la generación actual)
}

// Mostrar el mes generado y la estación correspondiente en la consola
console.log(`Mes generado: ${optionRandom}, Estación: ${opcion}`);
