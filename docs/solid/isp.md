---
sidebar_position: 5
description: No code should be forced to depend on methods it does not use.
---

# Interface Segregation Principle

> No code should be forced to depend on methods it does not use. [^1]
>
> > Robert C. Martin

This principle discusses that when you have an static language like Java or C#,
each of the application that needs to implement an interface it needs to
implement all the methods, even the ones that they don't use.

This principles proposes that instead of having a large interface that
implements all the methods, it creates sub interfaces that each implement the
methods that are required by the class.

This is not a problem on dynamic languages like `python` or `ruby` because this
checks happens at runtime instead of compile time.

> ISP is a language issue, rather than an architecture issue

There is an exception, [Go](https://go.dev) is a compiled language that
support this interface behavior like dynamic languages because `go` doesn't
**implement** the interfaces but rather if uses [Duck
Typing](https://devopedia.org/duck-typing) at compile time to check if the
methods that are required are implement without the need to **import** them.

[^1]:
    Robert C. Martin. _Agile Software Development: Principles, Patterns,
    and Practices_, Pearson Education, 2002.
