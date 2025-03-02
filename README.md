# Seguimiento de Libros - Proyecto de Comentarios
## Introducción
#### Bienvenido al proyecto "Seguimiento de Libros", donde aprenderás a interactuar con el Document Object Model (DOM) utilizando JavaScript y HTML. Este proyecto está diseñado para ayudarte a comprender los conceptos básicos del DOM y cómo manipular el contenido de una página web de manera dinámica.
## Descripción del Proyecto
#### En esta aplicación, los usuarios podrán:

#### 1. Inicio de sesion: Los usuarios pueden iniciar sesión utilizando un nombre de usuario y una contraseña. Si las credenciales son correctas, serán redirigidos a la página principal.
#### 2. Agregar Comentarios: Los usuarios podrán escribir sus comentarios en un campo de texto y, al hacer clic en un botón, el comentario se mostrará en la página junto con la fecha y hora de publicación.
#### 3. Eliminar Comentarios: Opcionalmente, se puede implementar un botón para eliminar comentarios, lo que permitirá a los usuarios gestionar sus aportes de manera más efectiva.

## Tecnologías Utilizadas
#### ✶ HTML: Para estructurar la página y crear el formulario de comentarios.
#### ✶ CSS: Para estilizar la página y mejorar la experiencia del usuario (opcional).
#### ✶ JavaScript: Para manejar la lógica de agregar y eliminar comentarios, así como para interactuar con el DOM.

## Funcionalidad de Inicio de Sesión
#### El inicio de sesión se gestiona a través de un formulario que solicita un nombre de usuario y una contraseña. A continuación, se detalla la lógica implementada en script.js:
[![image.png](https://i.postimg.cc/Rh0fBKVM/image.png)](https://postimg.cc/jwGC6W79)

#### ✶ Validación de Usuario: Se verifica si el nombre de usuario y la contraseña ingresados coinciden con alguno de los usuarios predefinidos en el array users.
#### ✶ Almacenamiento Local: Si las credenciales son correctas, se almacena el usuario en el localStorage y se redirige al usuario a la página principal (home.html).
#### ✶ Manejo de Errores: Si las credenciales son incorrectas, se muestra un mensaje de error en la página.

## Interfaz de la Página

Al iniciar sesión, los usuarios son redirigidos a la página de comentarios, donde pueden interactuar con la funcionalidad de comentarios. En esta página, los usuarios pueden:

- **Publicar Comentarios**: Escribir un comentario en un campo de texto y publicarlo. El comentario se mostrará junto con la fecha y hora de publicación.
[![image.png](https://i.postimg.cc/fTDcxMJN/image.png)](https://postimg.cc/6Tb4KJrj)

#### En tu código, la funcionalidad para publicar comentarios se encuentra en la función 'postComment()'. Esta función se activa cuando el usuario hace clic en el botón "Publicar".

- **Eliminar Comentarios**: Solo el autor del comentario tiene la capacidad de eliminarlo. Esto se verifica comparando el nombre de usuario almacenado en `localStorage` con el del comentario. Si el usuario es el autor, se mostrará un botón de eliminar junto a su comentario.

[![image.png](https://i.postimg.cc/LXyczmp6/image.png)](https://postimg.cc/WFkYVLzQ)

#### La funcionalidad para eliminar comentarios se implementa en la función 'eliminarComentario(index)', que se llama cuando el usuario hace clic en el botón de eliminar.


## Implementación del DOM

El **Document Object Model (DOM)** es una interfaz de programación que permite a los scripts acceder y actualizar el contenido, la estructura y el estilo de un documento HTML. En tu proyecto, has utilizado el DOM de varias maneras:

### Acceso a Elementos del DOM:

#### ✶ En la función postComment(), accedes al campo de texto para obtener el comentario ingresado por el usuario y a la sección donde se mostrarán los comentarios.

[![image.png](https://i.postimg.cc/QMCJn7KD/image.png)](https://postimg.cc/v1Rn4cv2)

### Creación de Elementos:
#### En la función mostrarComentarios(), se crea dinámicamente un nuevo elemento para cada comentario que se publica. 
[![image.png](https://i.postimg.cc/5t04D4mL/image.png)](https://postimg.cc/TKzvDXF3)

### cerrar sesion 
#### La función logout() se encarga de cerrar la sesión del usuario y redirigirlo a la página de inicio de sesión (index.html).
[![image.png](https://i.postimg.cc/BnqPjrxb/image.png)](https://postimg.cc/vcNZjS2w)
 
## Como esta implementado en la web  
### Inicio de sesion
[![image.png](https://i.postimg.cc/7LXZphcn/image.png)](https://postimg.cc/bGDPnyqZ)

### Pagina
[![image.png](https://i.postimg.cc/WztRhb5j/image.png)](https://postimg.cc/2Lp9tmpX)

### comentarios
[![image.png](https://i.postimg.cc/d0pk3Lsm/image.png)](https://postimg.cc/WDmbfpJh)

