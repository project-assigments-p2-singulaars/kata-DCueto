# Kata 🍷

Una vez ya tenemos una idea de qué es el testing y cómo se hace, vamos a ponerlo en práctica con un ejercicio.

## Objetivo

El ejercicio consiste en la creación de una kata de testing. Una kata es un ejercicio que se repite una y otra vez con el objetivo de mejorar en una habilidad concreta. En este caso, el objetivo es mejorar en la habilidad de escribir tests.

## Descripción

Lo que vamos ha hacer es una kata totalmente inventada. Puedes realizar una muy sencilla como la kata de FizzBuzz o algo más complejo. La idea es que crees una kata que tenga una serie de tests que se puedan realizar y que tengan sentido.

## Requisitos

- Debes crear una kata de testing.
- Debes crear una serie de tests que se puedan realizar.
- Debes subir la kata en dos ramas: la main donde este el código del test y una rama donde este la respuesta de la kata(testing y código js).
- La kata FizzBuzz no se puede hacer.

## Entrega
La entrega se realizará el día 2 de abril y se realizará una presentación en clase de la kata realizada.


## Ejercicio

### 1

Hay un cliente que contacta con un desarrollador freelancer. Al cliente le interesa saber cuanto cobra por día trabajado. El freelancer le explica al cliente que el cobra por horas y que su jornada son de 8h por día.

Ayuda al freelancer a calcular cual es el costo por jornada dada una tasa por hora trabajada.

dayRate( 45 );

### 2

Otro día, un project manager ofrece al freelancer de trabajar en un proyecto con un presupuesto fijo.

Dado ese presupuesto fijo y la tasa por hora trabajada del freelancer, ayudales a calcular el número de días que deberá trabajar en el proyecto hasta que el presupuesto se agote.

El resultado debe ser redondeado hacia abajo hasta el número entero más cercano.

daysInBudget(30000, 45);

### 3

Muchas veces los clientes del desarrollador freelancer le contratan para proyectos con una duración de varios meses.
En esos casos, el freelancer decide ofrecer un descuento cada mes, y los días restantes los cobra sin ese descuento. Cada mes tiene 22 días laborales.

Ayúdale a estimar el costo para ese tipo de proyectos, dado una tasa por horas, el número de días que el proyecto va a durar y, el descuento por cada mes entero trabajado.

El descuento siempre va a ser un número, donde 25% sería 0.25. El resultado debe ser redondeado hacia arriba hasta el número entero más cercano.

priceWithMonthlyDisconunt(45, 320, 0.25);




