---
sidebar_position: 4
description: Glosario de términos
---

# Glosario

## Branch

Cuando está trabajando en un proyecto de git, sus cambios viven dentro de una _línea de tiempo_ que se compone de un grupo de confirmaciones, esta línea de tiempo se llama `branch`.

De la misma manera, cuando tienes una serie que se desarrolla a lo largo de varios personajes y cada personaje tiene su propia historia, piensa en [La casa de papel](https://en.wikipedia.org/wiki/Money_Heist) o [The Playlist](https://www.imdb.com/title/tt11564258/), sucede lo mismo al desarrollar software, crea diferentes líneas de tiempo para diferentes secciones del código, esto podría ser arbitrario, como crear diferentes ramas para diferentes funciones o diferentes sucursales para cada desarrollador.

De la misma manera que sucede con la serie de televisión, aunque las diferentes ramas se crean a partir de un punto particular en el tiempo y continúan por su cuenta, esas líneas de tiempo eventualmente convergen en la línea principal de la historia, y lo mismo sucede con el software donde eventualmente convergieron en una rama y traen consigo todos los cambios que les suceden mientras eran independientes, lo que se denomina [Merge branch](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging).

## Forking

Este no es un comando en git, sino más bien un concepto, si pensamos en las ramas como historias independientes que finalmente convergen en la línea de la historia principal, una bifurcación es como si la línea de la historia no convergiera y se volviera rebelde para crear su propio escindir. Me gusta [Pearson](https://www.imdb.com/title/tt8115460/) con [Suits](https://www.imdb.com/title/tt1632701/)

En una bifurcación, inicia un nuevo proyecto desde un punto específico en el tiempo desde el código base y luego lo ejecuta independientemente de ese proyecto, un ejemplo de esto sería [MariaDB](https://mariadb.org) es una bifurcación de [MySQL](https://www.mysql.com/).

## HEAD

Esto se refiere a la última confirmación en una rama en particular, y cuando agrega una nueva confirmación, las diferentes se realizan contra esta confirmación, y una vez que se realiza una confirmación, la última confirmación se convertirá en el nuevo `HEAD`.

Siguiendo la analogía de la serie, el último episodio de una serie sería la `HEAD` en una 'rama'.

## Hook

Estos son scripts que se ejecutan automáticamente cada vez que ocurre un evento en particular en un repositorio de Git.[^1]

Esto le permite personalizar el comportamiento interno de git y desencadenar acciones personalizables en diferentes puntos clave del ciclo de vida del desarrollo.

El caso de uso de los git hooks podría ser prevenir comportamientos no deseados o aplicar el control de calidad antes de comprometerse, como [lint](https://en.wikipedia.org/wiki/Lint_%28software%29), probar o aplicar convenciones de código.

## Main

Esto se refiere a la rama predeterminada que se utiliza para realizar un seguimiento del software, podría pensar en ella como la historia base de una serie.

Esta rama no tiene que llamarse `Mmain`, podría usar cualquier nombre, pero generalmente la convención es llamar a la rama predeterminada ya sea `main` o `master` (no se usa con tanta frecuencia debido a [sensibilidad cultural](https://www.theserverside.com/feature/Why-GitHub-renamed-its-master-branch-to-main)).

## Pull Request

Cuando trabaja con un directorio remoto, generalmente desea desarrollar cambios en su repositorio local y luego enviar esos cambios a una rama remota.

Cuando está trabajando con un sistema distribuido que usa un punto centralizado, y desea agregar esos cambios a este punto centralizado, realiza una "Solicitud de extracción".

Lo que básicamente significa que le pides a los mantenedores del proyecto que fusionen los cambios que tienes en la rama del proyecto.

## Repository

Colección de confirmaciones, ramas y etiquetas para identificar confirmaciones.

## Tag

Cuando está trabajando en un proyecto de git, tiene una serie de confirmaciones, las confirmaciones son cambios que se aplicaron a los archivos dentro del código fuente.

Las etiquetas son una forma de elegir un compromiso en particular y marcar una referencia particular sobre ellos, por ejemplo, desea usar para etiquetar diferentes versiones de lanzamiento del código fuente para que sea más fácil navegar en el futuro, en lugar de arrojar todos los compromisos y adivinar cual tiene el cambio que buscas.

## Version Control

Este es un sistema que registra cambios en un archivo o conjunto de archivos a lo largo del tiempo y puede recuperar versiones específicas de ese sistema más adelante.

## Working Tree

Este es el directorio, y los archivos y el directorio dentro, que están asociados con un [Repositorio](#repository).

Esto básicamente describe todos los archivos en el proyecto que puede manejar git.

[^1]: 'Git Hooks', _Bitbucket_, 2022, https://www.atlassian.com/git/tutorials/git-hooks?section=conceptual-overview
