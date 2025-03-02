
//Tabla de multiplicar
function pedirNumero() {
    let num = prompt("Elige un número para la tabla de multiplicar:");
    num = parseInt(num);

    if (isNaN(num)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    let lista = document.getElementById("tabla");
    lista.innerHTML = ""; // Limpiar la tabla anterior

    for (let i = 1; i <= 10; i++) {
        let resultado = num * i;
        let item = document.createElement("li");
        item.textContent = `${num} x ${i} = ${resultado}`;
        lista.appendChild(item);
    }
}


