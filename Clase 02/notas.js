// Generar una nota aleatoria entre 0 y 100
let nota = Math.floor(Math.random() * 101);

// Verificar si la nota está dentro del rango válido (0 a 100)
if (nota >= 0 && nota <= 100) {
    console.log(`Nota obtenida: ${nota}`); // Mostrar la nota generada

    // Evaluar la nota con condicionales
    if (nota >= 90) {
        console.log("¡Excelente! Muchas Felicidades.");
    } else if (nota >= 75) {
        console.log("¡Bien! Has aprobado ");
    } else if (nota >= 60) {
        console.log("Has aprobado. Es suficiente, pero puedes mejorar.");
    } else {
        console.log("Reprobado. Necesitas esforzarte más");
    }
} else {
    // Mensaje en caso de que la nota no sea válida (aunque con la generación actual no ocurrirá)
    console.log("Nota incorrecta. Debe estar entre 0 y 100.");
}
