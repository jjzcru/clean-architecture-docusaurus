---
sidebar_position: 4
description: Si para cada objeto o1 de tipo S hay un objeto o2 de tipo T tal que para todos los programas P definidos en términos de T, el comportamiento de P no cambia cuando se sustituye o2 por o1, entonces S es un subtipo de T.
---

# Liskov Substitution Principle

_Principio de sustitución de Liskov_

> Lo que se busca aquí es algo así como la siguiente propiedad de sustitución: Si
> para cada objeto o1 de tipo S es un objeto o2 de tipo T tal que para todo
> programas P definidos en términos de T, el comportamiento de P no cambia cuando o1 es
> sustituido por o2 entonces S es un subtipo de T.[^1]
>
> > Barbara Liskov

En términos simples, si tiene un programa que depende de una clase A y sin
modificación de ese programa envías una clase B, por definición B es una
subclase de A.

Al desarrollar una aplicación, debe asegurarse de comprender qué es
el **comportamiento** en el que confía y asegúrese de que las subclases que
están heredando de la superclase están manteniendo el mismo comportamiento por lo que
cumplir con LSP.

Un ejemplo de la violación de este principio es [El problema Cuadrado-Rectángulo](https://aip.vse.cz/pdfs/aip/2016/01/03.pdf).

[^1]: Barbara Liskov. _Data Abstraction and Hierarchy_, SIGPLAN Notices 23, 1988.
