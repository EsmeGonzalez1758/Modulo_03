# Comparaciones y decisiones en JavaScript
#### En esta clase vimos los siguientes temas:
## Guardando Valores en Variables y Operadores Básicos
#### Las variables nos permiten almacenar datos, como números, palabras o resultados de cálculos. Imagina que estás haciendo una receta y quieres guardar cuántos ingredientes necesitas. En lugar de tener que recordar ese número en todo momento, lo anotas en una variable.
 ### var
 #### Esta es la forma más antigua de declarar una variable en JavaScript.
 ### let
 #### Esta es la forma más moderna de declarar una variable en JavaScript.
 ### const
 #### Esta es la forma de declarar una variable que no se puede cambiar después de declararla
 ### Operadores Básicos
 #### 1. Operadores de Asignación. El operador de asignación más común es el signo igual =, que se usa para asignar un valor a una variable.
#### Operadores Matemáticos. Además de asignar valores, puedes realizar operaciones matemáticas con las variables. JavaScript tiene operadores para sumar, restar, multiplicar y dividir.
#### Operadores Combinados. JavaScript también tiene operadores que combinan la asignación con una operación matemática. Estos operadores te permiten hacer cálculos más rápido.
## Operadores de Comparación y Lógicos
### Operadores de Comparación
#### 1. Igualdad Débil (==): El operador == compara dos valores, pero convierte los tipos de dato si es necesario antes de hacer la comparación. 
#### 2. Igualdad Estricta (===): El operador === compara los valores y también los tipos de dato. 
#### 3. Diferencia Débil (!=): Este operador compara dos valores y devuelve true si son diferentes, ignorando el tipo de dato.
#### 4. Diferencia Estricta (!==): Compara los valores y tipos de datos. Devuelve true si son diferentes en valor o tipo.
#### 5. Mayor que (>) y Menor que (<): Compara si un valor es mayor o menor que otro.
### Operadores Lógicos
#### 1. AND (&&) Devuelve true solo si ambas condiciones son verdaderas. Si alguna es falsa, devuelve false.
#### OR (||): Devuelve true si al menos una de las condiciones es verdadera. Solo devuelve false si todas son falsas.
#### NOT (!):Este operador invierte el valor de una condición. Si es true, la convierte en false, y viceversa.
## Estructura de Control if
#### - if: Se ejecuta cuando una condición es verdadera.
#### - else if: Se usa para agregar más condiciones.
#### - else: Se ejecuta si ninguna de las condiciones anteriores es verdadera.
### Podemos combinar estas condiciones usando operadores lógicos como && (y) y || (o).

## Por lo que de acuerdo a los temas visto se realizo el siguiente ejercicio en clase:

[![ejercicio-parte-1.jpg](https://i.postimg.cc/JhsgDfyP/ejercicio-parte-1.jpg)](https://postimg.cc/8FVwxnm6)

[![ejercicio-parte-2.jpg](https://i.postimg.cc/sX6v6ZfV/ejercicio-parte-2.jpg)](https://postimg.cc/7GzHbhTc)



#### Este archivo contiene ejemplos básicos de JavaScript que ilustran el uso de estructuras de control como condicionales, operadores ternarios, instrucciones switch, y la generación de números aleatorios.
#### - Condicionales (if-else): Permite tomar decisiones en función de valores o condiciones. Se usa para verificar si una nota es suficiente para aprobar o reprobar.
#### - Condicionales con Rango (if-else if-else): Se evalúa el valor de la temperatura y se muestra un mensaje adecuado dependiendo de su rango (calor, clima agradable o frío).
#### Operadores Ternarios: Proporciona una forma compacta de escribir condicionales if-else. Se usa para verificar si una persona es mayor de edad o si una nota es aprobatoria.
#### - Instrucción switch: Permite ejecutar diferentes bloques de código según el valor de una variable. En este caso, se usa para mostrar un mensaje según el día de la semana.
#### - Generación de Números Aleatorios: Utiliza Math.random() y Math.floor() para generar un número aleatorio entre 0 y 100, útil en situaciones como la simulación de puntajes o eventos aleatorios. a continuacion se pondra el resultado 

[![ejercicio-final.jpg](https://i.postimg.cc/nVW1MXKb/ejercicio-final.jpg)](https://postimg.cc/c6Q3b45X)

## Ejercicio No. 1
### Comprobación de Par e impar
#### En el siguiente código generara un número aleatorio entre 1 y 100, y luego verifica si ese número es par o impar. Para hacer esto, utiliza el operador módulo (%), que permite calcular el residuo de la división de un número entre 2. 
 #### Se genera un número aleatorio entre 1 y 100 utilizando Math.random() y Math.floor(). El número generado es redondeado hacia abajo y ajustado para que esté en el rango de 1 a 100.

 [![impar-codigo.jpg](https://i.postimg.cc/Gt1BW1w2/impar-codigo.jpg)](https://postimg.cc/vg3HnkmF)

 #### Y ahora se vizualizara el codigo:
 [![impar-codigo-resultado.jpg](https://i.postimg.cc/x8SRt76G/impar-codigo-resultado.jpg)](https://postimg.cc/FdD3KP51)


## Ejercicio No. 2
### Generar un número aleatorio entre 1 y 12 (representando los meses del año)
#### Este código genera un número aleatorio entre 1 y 12, representando los meses del año (de 1 para enero hasta 12 para diciembre), y luego utiliza un switch-case para determinar la estación del año correspondiente a ese mes. Se genera un número aleatorio entre 1 y 12 utilizando Math.random() y Math.floor(), representando un mes del año. Se utiliza una estructura switch-case para evaluar el número generado (mes) y asignar la estación correspondiente:

#### Invierno: Meses 12 (diciembre), 1 (enero), y 2 (febrero)
#### Primavera: Meses 3 (marzo), 4 (abril), y 5 (mayo)
#### Verano: Meses 6 (junio), 7 (julio), y 8 (agosto)
#### Otoño: Meses 9 (septiembre), 10 (octubre), y 11 (noviembre)

[![ejercicio2-parte1.jpg](https://i.postimg.cc/tgfQCh5Z/ejercicio2-parte1.jpg)](https://postimg.cc/gwvBgL1m)
[![ejercicio2-parte2.jpg](https://i.postimg.cc/wT9Pzfp4/ejercicio2-parte2.jpg)](https://postimg.cc/QVnSkqVc)

## A continuacion se vera los resultados que se obtuvieron 
[![ejercicio2-resultado.jpg](https://i.postimg.cc/vmvgJZLN/ejercicio2-resultado.jpg)](https://postimg.cc/rdKwWcH1)

## Proyecto Evaluador de Notas con Mensajes Personalizados
#### Este código genera una nota aleatoria entre 0 y 100, y luego evalúa el rendimiento del estudiante según el valor de la nota. Utiliza condicionales para categorizar la nota en diferentes niveles, proporcionando un mensaje específico en función de la calificación obtenida.
#### Evaluación de la nota: Usando una serie de condicionales if-else if-else, el código clasifica la nota en diferentes categorías:

#### -90 o más: "¡Excelente! Muchas Felicidades."
#### -Entre 75 y 89: "¡Bien! Has aprobado."
#### -Entre 60 y 74: "Has aprobado. Es suficiente, pero puedes mejorar."
#### -Menor a 60: "Reprobado. Necesitas esforzarte más."

[![pryecto.jpg](https://i.postimg.cc/KYkbSq23/pryecto.jpg)](https://postimg.cc/cKS2fc6d)

#### A continuacion se observa el codigo ejecutandose
[![pryecto-resultado-final-ult.jpg](https://i.postimg.cc/J4V5bGnf/pryecto-resultado-final-ult.jpg)](https://postimg.cc/QVm7DNcm)



