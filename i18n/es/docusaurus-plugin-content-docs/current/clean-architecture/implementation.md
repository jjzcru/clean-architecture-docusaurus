---
sidebar_position: 3
description: How can we apply this architecture?
---

# Implementation

![Clean Architecture Implementation](./images/clean-architecture-diagram.png)

The clean architecture is just a way to think about our code in abstract way doing a separation of concerns with the business logic instead of prescribe solutions that a particular frameworks or tool dictates.

One way to implement Clean architecture would be is as a traditional horizontal layer architecture, where we separate our code base in what it does from a technical perspective.

## Presentation

In this layer of the architecture we focus on the entry and output of the program, this is the layer that the user interacts.

- **REST API**: The code related to HTTP/s request and response, headers, input validation.
- **CLI**: Code related to command interpretation, flags and values
- **GUI**: input events, buttons, colors, layout.

If the user interacts with it, belong to this layer regardless of the actual implementation, with this separation of concern is possible to provide all of this inputs in the same project without changing the rest of our code.

There is a clear boundary in the presentation layer, it only talks directly to the [Domain Layer](#domain) and never talks directly to the [Data Layer](#data).

## Domain

In this layer lives the hearth and soul of our application, this is where the entities and the business logic of the program resides, this layer should be the most stable of the three layers.

In the domain layer the `Interactors` rely on abstractions of the [Data Layer](#data) instead of specific implementation, also the Domain layer is unaware of the existince of the [Presentation Layer](#presentation).

The domain layer is a dependency of the presentation layer, the reason for this is that the domain layer describes what the application should do, how this is achieve should not affect the program.

If we are building a banking application the logic is always the same regardless if this application is going to be a mobile application, an integration to an ATM or a developer tool wrapped in a CLI.

## Data

This layer handles everything that is related to persistence storage, external communication or any [Side Effect](<https://en.wikipedia.org/wiki/Side_effect_(computer_science)>).

A good rule of thumb is that if you required anything that is outside of memory or that requires persistent storage it belongs to this layer, even the program file system, databases, [ORM](https://www.freecodecamp.org/news/what-is-an-orm-the-meaning-of-object-relational-mapping-database-tools/), [Message Queues](https://aws.amazon.com/message-queue/), [API](https://backendless.com/what-is-api-as-a-service/), other programs using [IPC Communication](https://www.geeksforgeeks.org/inter-process-communication-ipc/)
