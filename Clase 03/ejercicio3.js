// Función para calcular la suma de los dígitos
function sumaDeDigitos(numero) {
    let suma = 0;
    // Convertimos el número en una cadena para poder iterar sobre cada dígito
    let numeroString = numero.toString();
    for (let i = 0; i < numeroString.length; i++) {
        suma += parseInt(numeroString[i]); // Sumamos cada dígito
    }
    return suma;
}

// Función para obtener el número del input y mostrar la suma
function calcularSuma() {
    let numero = document.getElementById("numero").value; // Obtenemos el valor del input
    if (numero === "") {
        alert("Por favor ingresa un número.");
        return;
    }

    numero = parseInt(numero); // Convertimos el valor a un número entero
    let resultado = sumaDeDigitos(numero);

    // Mostramos el resultado en una alerta
    alert("La suma de los dígitos de " + numero + " es: " + resultado);
}
