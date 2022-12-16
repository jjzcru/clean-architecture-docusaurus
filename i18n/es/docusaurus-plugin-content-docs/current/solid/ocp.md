---
sidebar_position: 3
description: Un artefacto de software debe estar abierto para extensión pero cerrado para modificación.
---

# Open-closed Principle

_Principio abierto-cerrado_

> Un artefacto de software debe estar abierto para extensión pero cerrado
> para modificación.[^1]
>
> > Bertrand Meyer

Cada vez que construye software, está creando un tipo de _artefacto_,
el comportamiento de este artefacto debe ser extensible sin necesidad de modificar
este artefacto.

Digamos, por ejemplo, que tiene un automóvil, este será el artefacto, las bases 
del auto están cerradas por modificación, pero podría agregar archivos adjuntos,
como llantas nuevas, un accesorio para montar bicicletas, un spoiler, en este caso el auto
está abierto para la extensión.

De la misma manera que se deben tratar a las clases, si tiene una clase que inicialmente
buscar usuarios, y en el futuro viene un nuevo requisito que necesita agregar
usuarios, su clase está abierta a la extensión, pero ese nuevo requisito no debería
afectar la forma en que funciona el requisito inicial de _buscar usuarios_.

Tomar OCP como guía lo ayudará a saber cómo debe diseñar su
clases, interfaces y funciones de una manera que logre [Separación de
Intereses](https://deviq.com/principles/separation-of-concerns) dentro de su
código.

[^1]:
    Bertrand Meyer. _Object Oriented Software Construction_, Prentice Hall,
    1988, p. 23.
