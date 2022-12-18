---
title: The Twelve-Factor App
sidebar_position: 4
---

# The Twelve-Factor App

This is a methodology on how to build SaaS applications, this best practices enable applications to be built with portability and resilience in mind, specially when deployed to the web.[^1]

This methodology was drafted by developers at [Heroku](https://www.heroku.com/).

## 1. Codebase

> One codebase tracked in revision control, many deploys

It states that everything that is related to a particular application, source code, provisioning scripts, configuration settings, and all of those artifacts are available for everyone that wishes to use the application inside the source code repository.

All of these artifacts are also accessible by the automation scripts that exist in the CI/CD system.

This system could be a revision control system like [Subversion ](https://subversion.apache.org/)or a decentralized revision control system like [Git](https://git-scm.com/).

If you have multiple codebases, that's not an app, that's a distributed system, and each component of the distributed system is an app.

> 1 codebase = 1 app

Multiple apps sharing the same code is a violation of this principle, if you want to share code across apps the best approach is to create libraries and share them across a [Dependency Manager](https://devopedia.org/dependency-manager#:~:text=A%20dependency%20manager%20operates%20at,dependency%20manager%20is%20project%20specific.).

## 2. Dependencies

> Explicitly declare and isolate dependencies

This factor describes that only the code that is relevant to the purpose of the application is stored in source control. Other external artifacts like packages, libraries, `.jar` files, or `.NET DLLs` should be referenced as dependencies.[^2]

And those should be loaded into memory at development, testing, and production runtimes. You should avoid storing the source code with the artifacts in the source code repository.

Examples of package managers can be found in different programming languages:

- [npm](https://www.npmjs.com/) and [yarn](https://yarnpkg.com/) for [Node.js](https://nodejs.org/en/)
- [pip](https://pypi.org/project/pip/) for [Python](https://www.python.org/)
- [Maven](https://maven.apache.org/) and [Gradle](https://gradle.org/) for [Java](https://www.java.com/en/).

## 3. Configuration

> Store config in the environment

This principle states that the configuration of an application should be injected at runtime or settings defined in an independent configuration file.

You can have good defaults in the application that can be overridden but in the general configuration details should be stored outside of the application and be loaded at runtime, this provides flexibility for QA, Operations, CI, and developers to run and test the application if different environment without the need of recompile the application or change the source code.

Examples of this are `docker-compose.yml` files or [Kubernetes](https://kubernetes.io/) `manifest files`.

## 4. Backing Services

> Treat backing services as attached resources

This principle establishes that architects/developers should treat external components, databases, email servers, message workers, file systems, and API services, as attached resources.

Meaning that it shouldn't be a strict dependency on those services, if for some reason you need to migrate from an Oracle database to a MongoDB the application should not require a big refactor.

This behavior promotes flexibility, robustness, and efficiency in the SDLC.

## 5. Build, Release, Run

> Strictly separate build and run stages

When you are working on an application it needs to break down into three processes:

### Build

The build stage is usually performed by the [CI](https://aws.amazon.com/devops/continuous-integration/) system, it will retrieve the changes that come from the source code repository and built/compiled artifacts, which could be [docker images](https://docs.docker.com/engine/reference/commandline/images/), `.jar` or `.war` files, packages or plain binaries, then is going to store those artifacts in an artifact repository like [Docker Hub](https://hub.docker.com/), [npm](https://www.npmjs.com/) or [Maven Registry](https://search.maven.org/).

### Release

Once the artifact is uploaded by the **Build** stage, in the release stage the configurations settings are applied to the artifact that is uploaded.

The [Configuration](#configuration) is loaded from the environment.

### Run

At this stage, the runtime is provisioned with the configuration from the release stage and then is run. This could be in the form of a [Docker Container](https://www.docker.com/resources/what-container/#:~:text=A%20Docker%20container%20image%20is,tools%2C%20system%20libraries%20and%20settings) or stand-alone processes.

## 6. Processes

> Execute the app as one or more stateless processes

When developing an application we need to think about building it as a stateless process, meaning that we should not rely on the state of the application to be stored in memory.

The application should not keep track the state of another application, and also should not keep track of information like session or workflow status, this should be outsource to a [Backing Services](#backing-services).

If we make application stateless are easier to reason about, are easier to scale and also makes them easier to operate independently of one another since we do not need to worry about unintended side effects.

## 7. Port Binding

> Export services via port binding

Applications should be identifiable by their port number and not a domain name, the main reason for this is that domain names and IP addresses can be performed on the fly, either by manual manipulation or [Service Discovery](https://www.nginx.com/blog/service-discovery-in-a-microservices-architecture/) systems like [Istio](https://istio.io/) or [Consul](https://www.consul.io/).

Potential issues like port collision are easier to detect and handle by using [Port Forwarding](https://portforward.com/).

## 8. Concurrency

> Scale out via the process model

This principle recommends organizing processes (Apps) according to their purpose and splitting them into multiple processes so they can be scaled up and down accordingly.

One of the downsides of Monolithic applications besides organizational issues is that to be able to scale them horizontally you need to scale the entire system, even if it's not required because only one of the modules is the one that is receiving more of the traffic.

If a microservice architecture is used, and each microservice handles a single functionality is easier just to scale that service instead of the entire system, while the rest of the system remains the same.

## 9. Disposability

> Maximize robustness with fast startup and graceful shutdown

This principle states that applications should startup quickly and shut down gracefully, this means that the application handles everything that it needs before it starts serving users and it also takes care of removing all the existing connections and resources that are allocated to it before it shut down.

## 10. Development/production parity

> Keep development, staging, and production as similar as possible

This principle states that as a company the `development`, `staging` and `production` should be as closed as possible meaning that there isn't a big difference in version between each other.

Meaning that versions/features from development should not be drastically different from what exists in production.

Once a version of development is ready to be put in production CI will follow the process of [Build, Release, Run](#build-release-run) by running the settings that are set for production.

## 11. Logs

> Treat logs as event streams

In general, logs should be viewed as a stream of information that should be stored, parse and process so interested parties can consume it.

The routing process of capturing the logs should be different from the process of processing the log data.

## 12. Admin Processes

> Run admin/management tasks as one-off processes

When developing an application usually there are some admin task that needs to be performed like database migration, console logs or running one-time scripts.

This programs should run in an identical environment like the long-running process, they are run against a release using the same codebase and configuration, this admin code should ship the application code as well to avoid synchronization issues.

[^1]: Adam Wiggins. 'The Twelve-Factor App', 2017, https://12factor.net/.
[^2]: Bob Reselman. 'An illustrated guide to 12 Factor Apps', 2021, https://www.redhat.com/architect/12-factor-app.
