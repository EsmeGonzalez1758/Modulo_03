# Caja de Comentarios (Simple Comment Box)
## Introducción
#### En este ejercicio, practicarás la manipulación del DOM en JavaScript creando una aplicación donde los usuarios pueden agregar y visualizar comentarios.
#### Los usuarios podrán escribir un comentario en un formulario y, al hacer clic en un botón, este aparecerá en la página junto con la fecha y hora de publicación. También puedes añadir la opción de eliminar comentarios.

## Características
#### El proyecto "Caja de Comentarios" incluye las siguientes características:
#### ❂ **Formulario de Comentarios:** Un campo de texto donde los usuarios pueden escribir sus comentarios.
#### ❂ **Botón de Agregar:** Un botón que, al ser clicado, añade el comentario a la lista visible en la página.
#### ❂ **Visualización de Comentarios:** Los comentarios se muestran en la página junto con la fecha y hora de publicación, proporcionando contexto sobre cuándo se realizaron.

## ☼ HTML ☼ 
#### El código HTML y JavaScript proporcionado es parte de una aplicación de "Caja de Comentarios", que permite a los usuarios dejar comentarios sobre sus libros favoritos. La estructura HTML define la interfaz de usuario, mientras que el script JavaScript maneja la lógica para agregar y eliminar comentarios. Esta combinación permite una experiencia interactiva y dinámica, donde los comentarios se pueden ver y gestionar sin necesidad de recargar la página.

## ☼ JavaScript ☼
### Evento de Envío del Formulario
[![image.png](https://i.postimg.cc/cHHtZVf8/image.png)](https://postimg.cc/p9wLJcG2)
#### ❂ **Selección del Formulario:** Utiliza document.getElementById('commentForm') para seleccionar el formulario de comentarios.
#### ❂ **Evento de Envío:** Se agrega un evento que se activa al enviar el formulario.
#### ❂ **Prevención del Comportamiento Predeterminado:** event.preventDefault(); evita que la página se recargue al enviar el formulario.

### Obtención del Comentario
[![image.png](https://i.postimg.cc/MTSxmRpZ/image.png)](https://postimg.cc/QB0RXF7v)
#### ❂ **Selección del Campo de Texto:** Se selecciona el campo de texto donde el usuario escribe su comentario.
#### ❂ **Captura del Texto:** Se obtiene el valor ingresado por el usuario en el campo de texto.

### Validación del Comentario
[![image.png](https://i.postimg.cc/pdpbQCvt/image.png)](https://postimg.cc/xkD4nKqs)
#### ❂ **Verificación de Contenido:** Se verifica que el campo de texto no esté vacío antes de proceder.
#### ❂ **Selección de la Lista de Comentarios:** Se selecciona la lista donde se mostrarán los comentarios.

### Creación del Elemento de Comentario
[![image.png](https://i.postimg.cc/qM1p8zKy/image.png)](https://postimg.cc/WhJRVpX1)
#### ❂ **Creación de un Nuevo Elemento:** Se crea un nuevo elemento de lista, para contener el comentario.
#### ❂ **Adición de Clase CSS:** Se agrega una clase CSS al nuevo elemento para poder estilizarlo.

### Obtención de la Fecha y Hora
[![image.png](https://i.postimg.cc/vHKHJ4mM/image.png)](https://postimg.cc/qz8TnMnZ)
#### ❂ **Creación de un Objeto de Fecha:** Se crea un nuevo objeto de fecha que representa el momento actual.
#### ❂ **Formato de Fecha y Hora:** Se convierte la fecha y hora actual a una cadena legible según la configuración regional del usuario.

### Construcción del Contenido del Comentario
[![image.png](https://i.postimg.cc/sDG4dZJ4/image.png)](https://postimg.cc/3d7v2NVk)
#### ❂ **Asignación de Contenido HTML:** Se asigna el contenido HTML del nuevo elemento de comentario, que incluye una imagen de perfil, el texto del comentario, la fecha y hora, y un botón para eliminar el comentario.

### Adición del Comentario a la Lista
[![image.png](https://i.postimg.cc/1RMMGqm9/image.png)](https://postimg.cc/s1Qpy1G8)
#### ❂ **Inserción en la Lista:** Se agrega el nuevo comentario a la lista de comentarios en la página.

### Limpieza del Campo de Texto
[![image.png](https://i.postimg.cc/fT9GBCJc/image.png)](https://postimg.cc/yk7pNFhx)
#### ❂ **Restablecimiento del Campo:** Se limpia el campo de texto después de que se ha agregado el comentario.

### Manejo de la Eliminación del Comentario
[![image.png](https://i.postimg.cc/bJdnhsnh/image.png)](https://postimg.cc/vgFT78Xq)
#### ❂ **Selección del Botón de Eliminar:** Se selecciona el botón de eliminar dentro del nuevo comentario.
#### ❂ **Evento de Clic para Eliminar:** Se agrega un evento que se activa al hacer clic en el botón de eliminar.
#### ❂ **Eliminación del Comentario:** Se elimina el comentario de la lista cuando se hace clic en el botón de eliminar.

## Diseño Visual
#### Se realizaron el diseño en Css quedando de la siguiente forma 
[![image.png](https://i.postimg.cc/3JT9mQDH/image.png)](https://postimg.cc/bdmQfMT6)
