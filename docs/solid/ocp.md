---
sidebar_position: 3
description: A software artifact should be open for extension but close for modification.
---

# Open-closed Principle

> A software artifact should be open for extension but close for
> modification.[^1]
>
> > Bertrand Meyer

Whenever you are building software you are creating a type of _artifact_, the
behavior of this artifact should be extensible without the need to modify
this artifact.

Let say for example you have a car, this is going to be the artifact, the
basis of the car are closed for modification but you could add attachments
like new tires, an accessory to mount bikes, an spoiler, in this case the car
is open for extension.

The same way you should treat your classes, if you have a class that initially
fetch users, and in the future it comes a new requirement that it needs to add
users, your class is open to extension but that new requirement should not
affect the way that the initial requirement of _fetch users_ works.

Taking OCP as guideline will help you on how you should architecture your
classes, interfaces and functions in a way that you achieve [Separation of
Concerns](https://deviq.com/principles/separation-of-concerns) within your
code.

[^1]:
    Bertrand Meyer. _Object Oriented Software Construction_, Prentice Hall,
    1988, p. 23.
