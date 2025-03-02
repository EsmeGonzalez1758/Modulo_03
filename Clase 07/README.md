# Generador de Contraseñas Seguras
## Introducción
#### Este proyecto consiste en la creación de un generador de contraseñas seguras utilizando HTML, CSS y JavaScript. El objetivo es proporcionar a los usuarios una herramienta fácil de usar que les permita generar contraseñas aleatorias y seguras, que cumplan con los estándares de seguridad actuales. La aplicación permitirá a los usuarios personalizar la longitud de la contraseña y elegir si desean incluir letras mayúsculas, minúsculas, números y símbolos.

## Características
#### ❒ **Generación de Contraseñas Aleatorias:** El generador creará contraseñas únicas cada vez que se solicite.
#### ❒ **Personalización de la Longitud:** Los usuarios podrán especificar la longitud de la contraseña, con un mínimo de 8 caracteres.
#### ❒ **Opciones de Inclusión:** Los usuarios podrán elegir si desean incluir:
#### ◆ Letras mayúsculas
#### ◆ Letras minúsculas
#### ◆ Números
#### ◆ Símbolos
#### ❒ Interfaz Amigable: La aplicación contará con un diseño intuitivo y fácil de usar, siguiendo las mejores prácticas de diseño web.

## Tecnologías Utilizadas
#### ❒ **HTML:** Para la estructura del formulario y la interfaz de usuario.
#### ❒ **CSS:** Para el diseño y la presentación visual de la aplicación.
#### ❒ **JavaScript:** Para la lógica de generación de contraseñas y la manipulación del DOM.
 
## HTML (index.html)
#### El archivo HTML contiene la estructura básica de la aplicación. Incluye un video de fondo, un campo de texto para mostrar la contraseña generada, un botón para copiar la contraseña, un control deslizante para seleccionar la longitud de la contraseña y opciones para incluir diferentes tipos de caracteres.

[![image.png](https://i.postimg.cc/g0wF6MzC/image.png)](https://postimg.cc/v1dSJt6h)

## JavaScript
### Eventos de Escucha
#### es una función que espera a que ocurra un evento específico en un elemento del DOM (Document Object Model).
[![image.png](https://i.postimg.cc/PJfBdhxk/image.png)](https://postimg.cc/ph70Bwz0)
#### ❒ **generate:** Este evento se activa cuando el usuario hace clic en el botón "Generar". Llama a la función generatePassword para crear una nueva contraseña.
#### ❒ **copyBtn:** Este evento se activa cuando el usuario hace clic en el botón de copiar. Llama a la función copyPassword para copiar la contraseña generada al portapapeles.
#### ❒ **length:** Este evento se activa cuando el usuario ajusta el control deslizante de longitud. Llama a la función updateLength para actualizar la visualización de la longitud seleccionada.

### Generación de Contraseña
[![image.png](https://i.postimg.cc/Bb9VMVtR/image.png)](https://postimg.cc/BLppvNTC)
#### ❒ **Recopilación de Opciones:** Se obtienen las opciones seleccionadas por el usuario (longitud, mayúsculas, minúsculas, números y símbolos).
#### ❒ **Construcción de Caracteres:** Se crea una cadena chars que contiene todos los caracteres posibles según las opciones seleccionadas.
#### ❒ **Generación de Contraseña:** Se genera una contraseña aleatoria de la longitud especificada, eligiendo caracteres al azar de la cadena chars.
#### ❒ **Actualización del Campo de Contraseña:** La contraseña generada se muestra en el campo de texto y se establece su estilo en negrita.
#### ❒ **Actualización de la Fuerza de la Contraseña:** Se llama a la función updateStrength para evaluar y mostrar la fuerza de la contraseña generada.

### Copiar Contraseña
[![image.png](https://i.postimg.cc/zvd56NWV/image.png)](https://postimg.cc/sGZtGtTr)
#### ❒ **Selección de Contraseña:** Se selecciona el texto en el campo de contraseña.
#### ❒ **Copia al Portapapeles:** Se utiliza document.execCommand("copy") para copiar la contraseña seleccionada al portapapeles.

### Actualizar Longitud
[![image.png](https://i.postimg.cc/tRV4mZmj/image.png)](https://postimg.cc/grmpxJWS)
#### ❒ **Actualización de Visualización:** Se actualiza el texto que muestra la longitud seleccionada en el control deslizante, reflejando el valor actual.

### Actualizar Fuerza de la Contraseña
[![image.png](https://i.postimg.cc/8PRK44Rr/image.png)](https://postimg.cc/rKpNFSY8)
#### ❒ **Evaluación de Fuerza:** Se evalúa la longitud de la contraseña generada para determinar su fuerza (débil, media o fuerte).
#### ❒ **Actualización de Visualización:** Se actualiza el texto y el color del cuadro de fuerza para reflejar la evaluación.

## Diseño Visual
[![image.png](https://i.postimg.cc/x1J4HmfX/image.png)](https://postimg.cc/9D2bHrq2)
