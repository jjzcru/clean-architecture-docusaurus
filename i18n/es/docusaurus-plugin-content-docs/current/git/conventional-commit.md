---
sidebar_position: 4
description: Specification on how to craft our commit messages.
---

# Conventional Commits

Cuando estamos trabajando con git, necesitamos crear `commits` que son puntos de control para nuestro código, y estos requieren un mensaje
para saber qué cambios particulares se realizaron en ese momento.

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#specification) es una especificación sobre cómo
elaborar dichos mensajes de confirmación.

Esta especificación es un conjunto simple y fácil de reglas para crear un historial de confirmaciones explícito, al
seguir esta convención facilita la creación de herramientas automatizadas para documentar la información de los `releases`.

## Estructura

La estructura del mensaje de confirmación sigue algo como esto:

```
<type>[optional scope][optional !]: <description>

[optional body]

[optional footer(s)]
```

Esta estructura contiene los elementos estructurales para expresar la intención de cada compromiso.

1. **types**: Este elemento es uno de los tipos disponibles que explican a qué categoría pertenece el commit y también es **OBLIGATORIO**, los tipos pueden ser:
   - **feat**: Agrega una nueva función a su aplicación o biblioteca.
   - **build**: Cambios que afectan el sistema de compilación o las dependencias externas
   - **fix**: Representa una corrección de errores para su aplicación.
   - **ci**: Cambios a nuestros archivos de configuración de CI y scripts
   - **docs**: Cambios que están relacionados a la documentación.
   - **style**: Cambios que no afectan el significado del código, sino convenciones del código como espacios en blanco, formato, falta de puntos y coma, etc.
   - **refactor**: Cambios que no arreglan ningún bug o agrega alguna funcionalidad.
   - **perf**: Cambios que mejoran el rendimiento del programa.
   - **test**: Cambios relacionados a la falta de `tests` o arreglar los existentes.
   - **chore**: Otros cambios que no modifican el codigo fuente o los archivos de test.
2. **scope**: Este es un elemento opcional que proporciona información contextual sobre la confirmación, el alcance está entre paréntesis. P.ej. `feat (i18n)`
3. **!** : Este símbolo es opcional e indica un cambio que rompe la compatibilidad.
4. **description**: Este elemento es **OBLIGATORIO** y describe lo que sucede en la confirmación, esta es la versión corta de la confirmación.
5. **body**: Este es un elemento opcional que proporciona una explicación más detallada de lo que sucede en la confirmación.
6. **footers**: Este es un elemento opcional, a menos que sea un `CAMBIO QUE ROMPE LA COMPATIBILIDAD`, en el que describa cuál es el cambio importante que se introdujo.

> La [Especificación completa](https://www.conventionalcommits.org/en/v1.0.0/#specification) describe todas las reglas relacionadas con los `Conventional Commits`.

## Beneficios

- Genera automáticamente [CHANGELOGs](https://keepachangelog.com/en/1.0.0/).
- Determine fácilmente el aumento de la versión semántica.
- Fácil transferencia de conocimientos a compañeros de trabajo, público o partes interesadas.
- Se puede usar para ejecutar CI/CD.
- Hace que sea más fácil contribuir a un proyecto al darles a los posibles contribuyentes un cambio para explorar un historial de confirmación más estructurado.
- Elimine la sobrecarga de pensar qué escribir en un mensaje de confirmación, ya que tienen un formato en el que confiar.
- Ayudar al desarrollador a enfocarse en el trabajo que está a punto de realizar porque necesitan pensar en el mensaje de compromiso antes de comenzar a trabajar, también les brinda el espacio para saber cuándo comprometerse una vez que alcancen el objetivo del compromiso.

## Mejores prácticas

- ✅ Use un caso consistente para los mensajes de confirmación.
- ✅ Introducir esta convención en la fase inicial de un proyecto, pensando en ello como si ya estuviera lanzado.
- ✅ Realice múltiples compromisos con cada uno con un solo objetivo en mente en lugar de un gran compromiso con diferentes tipos de cambios.
