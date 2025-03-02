let librosLeidos = [];

const agregarLibro = (titulo) => {
    librosLeidos.push(titulo);
};

const mostrarLibrosLeidos = () => {
    const lista = document.getElementById('lista-libros');
    lista.innerHTML = '';
    librosLeidos.forEach(libro => {
        const elemento = document.createElement('li');
        elemento.textContent = libro;
        lista.appendChild(elemento);
    });
};

const agregarLibroDesdeInput = () => {
    const tituloInput = document.getElementById('titulo-input');
    const titulo = tituloInput.value.trim();
    if (titulo) {
        agregarLibro(titulo);
        tituloInput.value = '';
    }
};