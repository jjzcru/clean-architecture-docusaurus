---
sidebar_position: 6
description: Los sistemas más flexibles son aquellos en los que las dependencias del código fuente se refieren únicamente a abstracciones, no a concreciones.
---

# Dependency Inversion Principle

_Principio de inversión de dependencia_

> Los sistemas más flexibles son aquellos en los que las dependencias del código fuente se refieren
> solo a abstracciones, no a concreciones
>
> > Robert C. Martin

Este principio establece que nuestro código debe basarse en el comportamiento de nuestro código
en lugar de los detalles de implementación.

Un ejemplo de esto es obtener datos de una base de datos, como desarrollador, como
cliente o como usuario realmente no nos importa "dónde" obtengo la información,
el **comportamiento** es "Como usuario quiero ver una lista de todos mis pedidos", el
la aplicación podría almacenarlos en un solo archivo `.json`, en una base de datos de documentos
como [MongoDB](https://www.mongodb.com/) o en una base de datos SQL como
[SQLite](https://www.sqlite.org) o [PostgreSQL](https://www.postgresql.org/).

Todos estos mecanismos de almacenamiento son detalles de implementación y nuestro código no debería
confiar en ellos, debería basarse en la abstracción de que "Necesito recibir los pedidos".

Ahora, depender totalmente de componentes abstractos es imposible ya que tenemos
tipos de datos primitivos como `string`, `int` o `float`, pero la diferencia es
que estos componentes son **estables**, no cambian, por lo que podemos confiar en
Componentes **estables** como primitivos, interfaces, clases abstractas
y [DTO](https://www.okta.com/identity-101/dto/).

_¿Cómo podemos usar cosas como bases de datos si esos son componentes volátiles?_

Creas abstracciones que describen el comportamiento y hacen que tu programa
confiar en ese comportamiento, esta abstracción podría ser [Fábricas] (https://www.tutorialspoint.com/design_pattern/factory_pattern.htm), [Repositorios] (https://deviq.com/design-patterns/repository-pattern) o [Fachadas](https://www.geeksforgeeks.org/facade-design-pattern-introduction/).
