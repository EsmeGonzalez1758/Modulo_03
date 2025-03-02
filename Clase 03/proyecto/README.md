# ARREGLOS Y CICLOS EN JAVASCRIPT
### WHILE
#### Un ciclo while es una estructura de control que permite ejecutar un bloque de código repetidamente mientras una condición específica sea verdadera. Esto es útil cuando no sabemos cuántas veces necesitaremos repetir un proceso antes de que se cumpla una condición.

#### La sintaxis básica de un ciclo while es la siguiente:
while (condición) {

// bloque de código a ejecutar

}

### FOR
#### Un ciclo for es una estructura de control de flujo que permite repetir un bloque de código un número específico de veces. Es especialmente útil cuando se conoce de antemano cuántas veces se debe ejecutar el ciclo, como al iterar sobre elementos en una lista o realizar una operación un número determinado de veces

#### La sintaxis básica de un ciclo for es la siguiente:
for (inicialización; condición; actualización) {

// bloque de código a ejecutar

}

### ARRAYS
#### Un array es una estructura de datos que permite almacenar múltiples valores en una sola variable. En JavaScript, los arrays son objetos que son especialmente útiles para manejar colecciones de datos. Los arrays son dinámicos, lo que significa que su tamaño puede cambiar durante la ejecución del programa, y pueden contener elementos de diferentes tipos, incluidos otros arrays.

let numeros = [1, 2, 3, 4, 5]; 

## PROYECTO DE FRUTAS - ARREGLOS Y CICLOS 
#### Este proyecto contiene un script de JavaScript que agrega frutas a diferentes listas HTML utilizando dos enfoques: bucle for y bucle while. Además, almacena la cantidad de frutas de cada tipo y las imprime en la consola.

## Descripción
#### El script define cuatro tipos de frutas (ácidas, semiácidas, neutras y dulces). Luego, agrega las frutas correspondientes a su lista respectiva en el HTML y cuenta la cantidad de frutas en cada categoría utilizando un objeto. El resultado es mostrado en la consola.

### Para poder realizar el la lista se necesita el siguiente arreglo para cada grupo de fruta como se ve a continuación:
[![arreglos.jpg](https://i.postimg.cc/tTXhCqrm/arreglos.jpg)](https://postimg.cc/3ycytTQg)

#### document.addEventListener('DOMContentLoaded', function () {...}): Indica al navegador que ejecute el código solo cuando el HTML haya sido completamente cargado.

### 1. Uso de for
#### En esta versión, se utiliza un bucle for para recorrer los arrays de frutas y agregar cada fruta como un elemento de lista en el HTML.

[![for.jpg](https://i.postimg.cc/SKnp8gFq/for.jpg)](https://postimg.cc/McJ4Jbpr)

#### El bucle for permite recorrer el array de frutas, donde:
#### * i es el índice del array, que empieza desde 0 y va hasta el tamaño del array.
#### * Cada fruta es añadida a una lista HTML como un li.

### 2. Uso de while
#### En esta versión, se utiliza un bucle while para lograr la misma funcionalidad que con el bucle for, pero gestionando manualmente el índice.

[![while.jpg](https://i.postimg.cc/J7cSsfDZ/while.jpg)](https://postimg.cc/SjRg5tGx)

#### El bucle while realiza una iteración de las frutas de manera similar al for, pero utilizando una variable i que se incrementa manualmente dentro del ciclo.

### Contenido del Objeto cantidadFrutas
#### El objeto cantidadFrutas se usa para almacenar la cantidad de frutas en cada tipo. El valor de cada propiedad es el número de frutas de ese tipo, obtenido usando la propiedad .length del array.

[![contenidoobjeto.jpg](https://i.postimg.cc/Zq6Wk8j8/contenidoobjeto.jpg)](https://postimg.cc/GBhLGsWt)

#### * Ácidas: Cantidad de frutas en el array frutasAcidas.
#### * Semiácidas: Cantidad de frutas en el array frutasSemiacidas.
#### * Neutras: Cantidad de frutas en el array frutasNeutras.
#### * Dulces: Cantidad de frutas en el array frutasDulces.

### Imprimir en la consola
#### Cuando se ejecuta el script, la cantidad de frutas por tipo se imprimirá en la consola de la siguiente manera:

[![impresion.jpg](https://i.postimg.cc/9XP81shb/impresion.jpg)](https://postimg.cc/5j0S27jQ)

### Requisitos

#### De igual forma se generara la lista en un html y es necesario tenerlo para imprimir en la consola el numero de frutas segun su tipo, el codigo debe de estar de la siguiente forma:

[![lista.jpg](https://i.postimg.cc/rw9gN42p/lista.jpg)](https://postimg.cc/yDkFVkdq)

#### Para que saliera la lista en la pagina se utilizo el siguiente codigo en javascript:

[![listas-correspondientes.jpg](https://i.postimg.cc/RZMw4VN6/listas-correspondientes.jpg)](https://postimg.cc/PPRCMHbT)

Quedando el diseño de la siguiente forma ya que se utiilizo css para el diseño:
[![html.jpg](https://i.postimg.cc/Sszm9kYm/html.jpg)](https://postimg.cc/ZB4ktkLQ)

#### sabiendo que los demas grupos estan mas abajo dezlizando el scroll


