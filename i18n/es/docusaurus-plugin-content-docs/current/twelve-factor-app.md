---
title: The Twelve-Factor App
sidebar_position: 4
---

# The Twelve-Factor App

Esta es una metodología sobre cómo crear aplicaciones SaaS. Estas prácticas recomendadas permiten que las aplicaciones se creen teniendo en cuenta la portabilidad y la resiliencia, especialmente cuando se implementan en la web.[^1]

Esta metodología fue redactada por desarrolladores en [Heroku](https://www.heroku.com/).

## 1. Codebase

> Una base de código rastreada en el control de revisión, muchas implementaciones

Establece que todo lo relacionado con una aplicación en particular, el código fuente, los scripts de aprovisionamiento, los ajustes de configuración y todos esos artefactos están disponibles para todos los que deseen usar la aplicación dentro del repositorio del código fuente.

Todos estos artefactos también son accesibles mediante los scripts de automatización que existen en el sistema CI/CD.

Este sistema podría ser un sistema de control de revisiones como [Subversion](https://subversion.apache.org/) o un sistema de control de revisiones descentralizado como [Git](https://git-scm.com/).

Si tiene varias bases de código, eso no es una aplicación, es un sistema distribuido y cada componente del sistema distribuido es una aplicación.

> 1 base de código = 1 aplicación

Múltiples aplicaciones que comparten el mismo código es una violación de este principio, si desea compartir código entre aplicaciones, el mejor enfoque es crear bibliotecas y compartirlas a través de un [Administrador de dependencia] (https://devopedia.org/dependency-manager# :~:text=A%20dependency%20manager%20opera%20at,dependency%20manager%20is%20project%20specific.).

## 2. Dependencias

> Declarar y aislar dependencias explícitamente

Este factor describe que solo el código que es relevante para el propósito de la aplicación se almacena en el control de código fuente. Se debe hacer referencia a otros artefactos externos como paquetes, bibliotecas, archivos `.jar` o `.NET DLL` como dependencias.[^2]

Y esos deben cargarse en la memoria en los tiempos de ejecución de desarrollo, prueba y producción. Debe evitar almacenar el código fuente con los artefactos en el repositorio de código fuente.

Se pueden encontrar ejemplos de administradores de paquetes en diferentes lenguajes de programación:

- [npm](https://www.npmjs.com/) y [hilo](https://yarnpkg.com/) para [Node.js](https://nodejs.org/en/)
- [pip](https://pypi.org/project/pip/) para [Python](https://www.python.org/)
- [Maven](https://maven.apache.org/) y [Gradle](https://gradle.org/) para [Java](https://www.java.com/en/).

## 3. Configuración

> Almacenar configuración en el entorno

Este principio establece que la configuración de una aplicación se debe inyectar en tiempo de ejecución o la configuración se debe definir en un archivo de configuración independiente.

Puede tener buenos valores predeterminados en la aplicación que se pueden anular, pero en la configuración general, los detalles deben almacenarse fuera de la aplicación y cargarse en el tiempo de ejecución, esto proporciona flexibilidad para QA, Operaciones, CI y desarrolladores para ejecutar y probar la aplicación si entorno diferente sin necesidad de recompilar la aplicación o cambiar el código fuente.

Ejemplos de esto son los archivos `docker-compose.yml` o [Kubernetes](https://kubernetes.io/) `archivos de manifiesto`.

## 4. Backing Services

> Tratar los Backing Services como recursos adjuntos

Este principio establece que los arquitectos/desarrolladores deben tratar los componentes externos, las bases de datos, los servidores de correo electrónico, los trabajadores de mensajes, los sistemas de archivos y los servicios de API como recursos adjuntos.

Lo que significa que no debería ser una dependencia estricta de esos servicios, si por alguna razón necesita migrar de una base de datos Oracle a MongoDB, la aplicación no debería requerir una gran refactorización.

Este comportamiento promueve la flexibilidad, la solidez y la eficiencia en el SDLC.

## 5. Construya, Lance, Ejecute

> Etapas de construcción y ejecución estrictamente separadas

Cuando está trabajando en una aplicación, debe dividirse en tres procesos:

### Construir

La etapa de compilación generalmente la realiza el sistema [CI](https://aws.amazon.com/devops/continuous-integration/), recuperará los cambios que provienen del repositorio de código fuente y los artefactos creados/compilados, que podrían ser [imágenes acoplables] (https://docs.docker.com/engine/reference/commandline/images/), archivos `.jar` o `.war`, paquetes o binarios simples, luego almacenará esos artefactos en un repositorio de artefactos como [Docker Hub](https://hub.docker.com/), [npm](https://www.npmjs.com/) o [Maven Registry](https://search.maven .org/).

### Liberar

Una vez que la etapa de **Creación** carga el artefacto, en la etapa de lanzamiento, los ajustes de configuración se aplican al artefacto que se carga.

La [Configuración](#configuración) se carga desde el entorno.

### Correr

En esta etapa, el tiempo de ejecución se aprovisiona con la configuración de la etapa de lanzamiento y luego se ejecuta. Esto podría tener la forma de un [Contenedor Docker](https://www.docker.com/resources/what-container/#:~:text=A%20Docker%20container%20image%20is,tools%2C%20system %20libraries%20and%20settings) o procesos independientes.

## 6. Procesos

> Ejecutar la aplicación como uno o más procesos sin estado

Al desarrollar una aplicación, debemos pensar en construirla como un proceso sin estado, lo que significa que no debemos confiar en el estado de la aplicación para almacenarla en la memoria.

La aplicación no debe realizar un seguimiento del estado de otra aplicación, y tampoco debe realizar un seguimiento de información como la sesión o el estado del flujo de trabajo, esto debe subcontratarse a [Servicios de respaldo] (#backing-services).

Si hacemos que la aplicación sea sin estado, es más fácil razonar, son más fáciles de escalar y también las hace más fáciles de operar de forma independiente, ya que no tenemos que preocuparnos por los efectos secundarios no deseados.

## 7. Asignación de Puertos

> Servicios de exportación a través de la vinculación de puertos

Las aplicaciones deben ser identificables por su número de puerto y no por un nombre de dominio, la razón principal de esto es que los nombres de dominio y las direcciones IP se pueden realizar sobre la marcha, ya sea mediante manipulación manual o [Detección de servicios] (https://www.nginx .com/blog/service-discovery-in-a-microservices-architecture/) sistemas como [Istio](https://istio.io/) o [Consul](https://www.consul.io/).

Los posibles problemas, como la colisión de puertos, son más fáciles de detectar y manejar mediante el [Reenvío de puertos] (https://portforward.com/).

## 8. Concurrencia

> Escalar horizontalmente a través del modelo de proceso

Este principio recomienda organizar los procesos (aplicaciones) de acuerdo con su propósito y dividirlos en múltiples procesos para que puedan escalarse hacia arriba y hacia abajo en consecuencia.

Una de las desventajas de las aplicaciones Monolíticas además de las cuestiones organizativas es que para poder escalarlas horizontalmente es necesario escalar todo el sistema, incluso si no es necesario porque solo uno de los módulos es el que está recibiendo más tráfico.

Si se utiliza una arquitectura de microservicio, y cada microservicio maneja una sola funcionalidad, es más fácil escalar ese servicio en lugar de todo el sistema, mientras que el resto del sistema permanece igual.

## 9. Desechabilidad

> Maximice la solidez con un inicio rápido y un apagado ordenado

Este principio establece que las aplicaciones deben iniciarse rápidamente y cerrarse correctamente, lo que significa que la aplicación maneja todo lo que necesita antes de comenzar a atender a los usuarios y también se encarga de eliminar todas las conexiones y recursos existentes que se le asignan antes de que se cierre. .

## 10. Paridad desarrollo/producción

> Mantenga el desarrollo, la puesta en escena y la producción lo más similares posible

Este principio establece que, como empresa, el "desarrollo", la "puesta en escena" y la "producción" deben ser lo más cerrados posible, lo que significa que no hay una gran diferencia de versión entre ellos.

Lo que significa que las versiones/características del desarrollo no deberían ser drásticamente diferentes de lo que existe en producción.

Una vez que una versión de desarrollo está lista para ser puesta en producción, CI seguirá el proceso de [Construir, Liberar, Ejecutar] (#construir-liberar-ejecutar) mediante la ejecución de la configuración establecida para la producción.

## 11. Registros

> Tratar los registros como flujos de eventos

En general, los registros deben verse como un flujo de información que debe almacenarse, analizarse y procesarse para que las partes interesadas puedan consumirla.

El proceso de enrutamiento para capturar los registros debe ser diferente del proceso de procesamiento de los datos de registro.

## 12. Procesos de administración

> Ejecutar tareas de administración/gestión como procesos únicos

Cuando se desarrolla una aplicación, generalmente hay algunas tareas administrativas que deben realizarse, como la migración de la base de datos, los registros de la consola o la ejecución de scripts únicos.

Estos programas deben ejecutarse en un entorno idéntico como el proceso de ejecución prolongada, se ejecutan en una versión que utiliza la misma base de código y configuración, este código de administración también debe incluir el código de la aplicación para evitar problemas de sincronización.

[^1]: Adam Wiggins. 'The Twelve-Factor App', 2017, https://12factor.net/.
[^2]: Bob Reselman. 'An illustrated guide to 12 Factor Apps', 2021, https://www.redhat.com/architect/12-factor-app.
