document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value;

    if (commentText) {
        const commentsList = document.getElementById('commentsList');

        // Crear un nuevo elemento de comentario
        const commentItem = document.createElement('li');
        commentItem.classList.add('comment');

        // Obtener la fecha y hora actual
        const now = new Date();
        const dateString = now.toLocaleString();

        // Agregar la imagen de perfil y el texto del comentario
        commentItem.innerHTML = `
            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Perfil" class="profile-pic">
            <div class="comment-content">
                <p><strong>${commentText}</strong></p> <!-- Texto en negritas -->
                <div class="comment-footer">
                    <small>${dateString}</small>
                    <button class="deleteBtn" title="Eliminar comentario"><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
        `;

        // Agregar el comentario a la lista
        commentsList.appendChild(commentItem);

        // Limpiar el campo de texto
        commentInput.value = '';

        // Agregar evento para eliminar el comentario
        const deleteBtn = commentItem.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', function() {
            commentsList.removeChild(commentItem);
        });
    }
});