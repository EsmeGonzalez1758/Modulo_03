# Proyecto: Seguimiento de Libros

## Introducción

#### Este proyecto es una aplicación web sencilla para hacer seguimiento de los libros que has leído. Utiliza HTML, CSS y JavaScript para permitir a los usuarios agregar y visualizar sus libros leídos.

## Funcionalidades
#### ✥ Agregar un libro a la lista de libros leídos.
#### ✥ Mostrar todos los libros que han sido agregados

## JavaScript
### 1. Declaración del Array de Libros
[![image.png](https://i.postimg.cc/XY4pGwHw/image.png)](https://postimg.cc/JGY1SBWn)
#### Este array almacena los títulos de los libros que el usuario ha ingresado.

### 2. Función para Agregar un Libro
[![image.png](https://i.postimg.cc/Pq8WKbHP/image.png)](https://postimg.cc/t1pn4xYj)
#### Esta función recibe un título como argumento y lo añade al array librosLeidos.

### 3. Función para Mostrar los Libros Leídos
[![image.png](https://i.postimg.cc/pd4pG3CH/image.png)](https://postimg.cc/Y4NrjnTn)
#### ✥ Se obtiene la referencia al elemento ul con getElementById.
#### ✥ Se vacía su contenido estableciendo innerHTML en una cadena vacía.
#### ✥ Se recorre el array librosLeidos y por cada libro:
#### ✥ Se crea un elemento li.
#### ✥ Se asigna el texto del libro al textContent del li.
#### ✥ Se añade el li a la lista en el DOM.

### 4. Función para Agregar un Libro desde el Input
[![image.png](https://i.postimg.cc/1zJLyZTk/image.png)](https://postimg.cc/gwLMK1Gs)
#### ✥ Se obtiene el valor ingresado en el campo de texto input.
#### ✥ Se elimina cualquier espacio en blanco innecesario con trim().
#### ✥ Si el título no está vacío:
#### ✥ Se llama a agregarLibro(titulo) para almacenarlo en el array.
#### ✥ Se vacía el campo de entrada para permitir nuevos ingresos.

## HTML
[![image.png](https://i.postimg.cc/6QtfY2HK/image.png)](https://postimg.cc/pmcjdTbc)
#### El archivo index.html contiene la estructura básica de la página web:
#### ✥ Un h1 con el título "Refugio Literario".
#### ✥ Un h2 con el subtítulo "Mis Libros Leídos".
#### ✥ Un campo de entrada input para escribir el título del libro.
#### ✥ Dos botones: uno para agregar libros y otro para mostrarlos.
#### ✥ Una lista ul donde se mostrarán los libros agregados.
#### ✥ Se enlazan los archivos proyecto_libros.css y proyecto_libros.js para aplicar estilos y funcionalidades.

## Diseño Visual
#### Se realizaron el diseño en CSS quedando de la siguiente forma
[![image.png](https://i.postimg.cc/qvS9Cc01/image.png)](https://postimg.cc/68VHkv8Z)