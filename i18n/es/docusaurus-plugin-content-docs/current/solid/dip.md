---
sidebar_position: 6
description: The most flexible systems are those in which source code dependencies refer only to abstractions, not to concretions.
---

# Dependency Inversion Principle

> The most flexible systems are those in which source code dependencies refer
> only to abstractions, not to concretions
>
> > Robert C. Martin

This principle states that our code should rely on the behavior of our code
instead of the implementation details.

An example of this is fetching data from a database, as a developer, as a
customer or as a user we really don't care "where" I'm getting the information,
the **behaviour** is "As a user I want to see a list of all my orders", the
application could store them in a single `.json` file, in a Document Database
like [MongoDB](https://www.mongodb.com/) or in a SQL database like
[SQLite](https://www.sqlite.org) or [PostgreSQL](https://www.postgresql.org/).

All this stores mechanism are implementation details and our code should not
rely on them, it should rely on the abstraction that "I need to get the orders".

Now totally depending on abstract components is impossible since we have
primitives data types like `string`, `int` or `float`, but the difference is
that this components are **stable**, they do not change, so we can rely on
**stable** components like primitives, interfaces, abstract classes
and [DTO](https://www.okta.com/identity-101/dto/).

_How can we use things like databases if those are volatile components?_

You create abstractions that describe the behavior and make your program
rely on those behavior, this abstraction could be [Factories](https://www.tutorialspoint.com/design_pattern/factory_pattern.htm), [Repositories](https://deviq.com/design-patterns/repository-pattern) or [Façades](https://www.geeksforgeeks.org/facade-design-pattern-introduction/).
