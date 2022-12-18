---
sidebar_position: 2
description: Un módulo de software tiene una, y sólo una, razón para cambiar.
---

# Single Responsibility Principle
_Principio de responsabilidad única_

> Un módulo de software tiene una, y sólo una, razón para cambiar.
>
> > Robert C. Martin

Este principio establece que un módulo, que podría ser una clase, una función,
un paquete o incluso una variable, solo tiene una razón para cambiar.[^1]

Cuando estás trabajando en una clase o una función, necesitas pensar en lo que es
que la función está tratando de lograr, es una función que está trabajando para calcular
el importe total de un pedido, no debe preocuparse por abrir o cerrar
bases de datos, o solicitudes de red, deben ser manejadas por otro "módulo".

SRP nos ayuda a evitar el _acoplamiento_, lo que significa que una determinada pieza de código es
unido a otra pieza, al trabajar con SRP en mente, creará módulos
que están desacoplados por diseño.

[^1]:
    Robert C. Martin. _Clean Architecture_, First Edition, Prentice
    Hall, 2017, p. 58-59
