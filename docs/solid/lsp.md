---
sidebar_position: 4
description: If for each object o1 of type S is an object o2 of type T such that for all programs P defined in terms of T, the behavior of P is unchanged when o1 is substituted for o2 then S is a subtype of T.
---

# Liskov Substitution Principle

> What is wanted here is something like the following substitution property: If
> for each object o1 of type S is an object o2 of type T such that for all
> programs P defined in terms of T, the behavior of P is unchanged when o1 is
> substituted for o2 then S is a subtype of T.[^1]
>
> > Barbara Liskov

In layman's terms if you have a program that depends on a class A and without
modification of that program you send a class B, by definition B is a
subclass of A.

When developing application you need to make sure you understand what is
the **behavior** that you rely upon and make sure that the subclasses that
are inheriting from the superclass are keeping the same behavior so they
comply with LSP.

One example of the violation of this principle is [The Square-Rectangle
Problem](https://aip.vse.cz/pdfs/aip/2016/01/03.pdf).

[^1]: Barbara Liskov. _Data Abstraction and Hierarchy_, SIGPLAN Notices 23, 1988.
