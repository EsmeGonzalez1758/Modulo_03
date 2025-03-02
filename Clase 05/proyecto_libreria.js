class Libro {
    constructor(titulo, autor, anio, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
    }

    describirLibro() {
        const estadoIcono = this.estado === "disponible" ? "✔️" : "❌";
        return `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${estadoIcono}.`;
    }
}

const libros = [];
const librosDiv = document.getElementById("libros");
const formLibro = document.getElementById("formLibro");
const tablaLibros = document.getElementById("tablaLibros");
const tbody = tablaLibros.querySelector("tbody");

function actualizarLista() {
    librosDiv.innerHTML = "";
    libros.forEach((libro, index) => {
        const div = document.createElement("div");
        div.className = "libro";
        div.innerHTML = `${libro.describirLibro()} <span class='eliminar' onclick='eliminarLibro(${index})'></span>`;
        librosDiv.appendChild(div);
    });
}

function actualizarTabla() {
    tbody.innerHTML = "";
    libros.forEach((libro, index) => {
        const estadoIcono = libro.estado === "disponible" ? "✔️" : "❌";
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.anio}</td>
            <td>${estadoIcono}</td>
            <td><button class="btn-eliminar" onclick="eliminarLibro(${index})">Eliminar</button></td>
        `;
        tbody.appendChild(fila);
    });
}

function mostrarTabla() {
    actualizarTabla();
    tablaLibros.style.display = "table";
}

function eliminarLibro(index) {
    libros.splice(index, 1);
    actualizarLista();
    actualizarTabla();
}

formLibro.addEventListener("submit", function(event) {
    event.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const anio = document.getElementById("anio").value;
    const estado = document.getElementById("estado").value;

    const nuevoLibro = new Libro(titulo, autor, anio, estado);
    libros.push(nuevoLibro);
    actualizarLista();
    actualizarTabla();
    formLibro.reset();
});