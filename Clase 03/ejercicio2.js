//Contar los digitos de un numero
function contarDigitos() {
    let numero = document.getElementById("numero").value;  // Obtenemos el valor del input
    let resultado = document.getElementById("resultado");  // Elemento para mostrar el resultado

    // Verificamos que el valor ingresado sea un número válido
    if (numero === "") {
        resultado.textContent = "Por favor, ingresa un número.";
        return;
    }

    // Usamos un ciclo para contar los dígitos
    let digitos = numero.length;  // La cantidad de caracteres en el número es igual a la cantidad de dígitos
    resultado.textContent = `El número tiene ${digitos} dígitos.`;
}
