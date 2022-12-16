---
sidebar_position: 5
description: No se debe obligar a ningún código a depender de métodos que no utiliza.
---

# Interface Segregation Principle

_Principio de segregación de interfaz_

> No se debe obligar a ningún código a depender de métodos que no utiliza. [^1]
>
> > Robert C. Martin

Este principio explica que cuando tienes un lenguaje estático como Java o C#,
cada una de las aplicaciones que necesita implementar una interfaz que necesita para
implementar todos los métodos, incluso los que no utilizan.

Este principio propone que en lugar de tener una gran interfaz que
implementa todos los métodos, crea subinterfaces en las que cada una implementa el
métodos requeridos por la clase.

Esto no es un problema en lenguajes dinámicos como `python` o `ruby` porque esto
las comprobaciones se realizan en tiempo de ejecución en lugar de en tiempo de compilación.

> ISP es un problema de idioma, más que un problema de arquitectura

Hay una excepción, [Go](https://go.dev) es un lenguaje compilado que
admitir este comportamiento de interfaz como lenguajes dinámicos porque `go` no lo hace
**implementar** las interfaces sino más bien si usa [Duck
Typing](https://devopedia.org/duck-typing) en tiempo de compilación para verificar si el
los métodos que se requieren se implementan sin necesidad de **importarlos**.

[^1]:
    Robert C. Martin. _Agile Software Development: Principles, Patterns,
    and Practices_, Pearson Education, 2002.
