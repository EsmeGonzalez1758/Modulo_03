document.addEventListener("DOMContentLoaded", function() {
    mostrarComentarios();
});

function postComment() {
    const commentText = document.getElementById('comment').value;
    const user = JSON.parse(localStorage.getItem("loggedUser  "));
    const fecha = new Date().toLocaleString();

    if (!user) {
        alert("Debes iniciar sesión para comentar");
        return;
    }

    if (commentText.trim() === "") {
        alert("El comentario no puede ir vacío");
        return;
    }

    const newComment = {
        username: user.username,
        name: user.name,
        image: user.image,
        commentText: commentText,
        timestamp: fecha
    };

    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(newComment);
    localStorage.setItem('comments', JSON.stringify(comments));
    document.getElementById('comment').value = "";
    mostrarComentarios();
}

function mostrarComentarios() {
    const commentSection = document.getElementById('comment-section');
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const user = JSON.parse(localStorage.getItem("loggedUser  "));

    commentSection.innerHTML = '';

    comments.forEach((comment, index) => {
        const comentarioSection = document.createElement("section");
        comentarioSection.classList.add("comentario");
        comentarioSection.innerHTML = `
            <img src="${comment.image}" class="user-image"> 
            <strong>${comment.name}</strong><br>
            <p>${comment.timestamp}</p>
            <p>${comment.commentText}</p>
        `;

        // Solo mostrar el botón de eliminar si el usuario es el autor del comentario
        if (user && user.username === comment.username) {
            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-button");
            deleteButton.innerHTML = `<img src="https://img.icons8.com/ios-filled/50/000000/trash.png" alt="Eliminar">`; 
            deleteButton.onclick = function() {
                eliminarComentario(index);
            };
            comentarioSection.appendChild(deleteButton);
        }

        commentSection.appendChild(comentarioSection);
    });
}

function eliminarComentario(index) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(comments));
    mostrarComentarios();
}

function logout() {
    localStorage.removeItem("loggedUser  ");
    window.location.href = "index.html"; // Redirigir a la página de inicio de sesión
}
