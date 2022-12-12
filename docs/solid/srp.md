---
sidebar_position: 2
description: A software module has one, and only one, reason to change.
---

# Single Responsibility Principle

> A software module has one, and only one, reason to change.
>
> > Robert C. Martin

This principle states that a module, which could be a class, a function,
a package or even a variable, has only one reason to change.[^1]

When you are working in a class or a function you need to think about what is
that function is trying to achieve, is a function is working on calculating
the total amount of an order, it should not worry about opening or closing
databases, or network requests, those should be handle by another "module".

SRP helps us to avoid _coupling_ meaning that a particular piece of code is
bound to another piece, by working with SRP in mind it will create modules
that are decoupled by design.

[^1]:
    Robert C. Martin. _Clean Architecture_, First Edition, Prentice
    Hall, 2017, p. 58-59
