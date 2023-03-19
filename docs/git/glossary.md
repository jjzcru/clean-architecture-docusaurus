---
sidebar_position: 5
description: Glossary of terms
---

# Glossary

## Branch

When you are working on a git project your changes live inside a _timeline_ which is composed of a group of commits, this timeline is called a `branch`.

The same way when you have series that develops along multiple characters and each character has their own story line, think of [Money Heist](https://en.wikipedia.org/wiki/Money_Heist) or [The Playlist](<https://en.wikipedia.org/wiki/The_Playlist_(TV_series)>), the same thing happens while developing software, you create different timelines for different sections of the code, this could be arbitrary like creating different branches for different feature or different branches for each developer.

The same way that happens with the tv series, even tough the different branches are created from a particular point in time and keep going on their own, those timelines eventually converge into the main story line, and the same happens with the software where eventually they converged into a branch and bring with them all the changes that happens to them while their were independent which is called a [Merge branch](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging).

## Forking

This is not a command in git, but more like a concept, if we think of branches like independent stories that eventually converge into the main story line, a fork is a like that story line didn't converge and went rogue to create it's own spin-off. Like [Pearson](https://www.imdb.com/title/tt8115460/) with [Suits](https://www.imdb.com/title/tt1632701/)

In a fork you start a new project from a specific point in time from the codebase and then run it independently from that project, one example of this would be [MariaDB](https://mariadb.org) is a fork of [MySQL](https://mariadb.org).

## HEAD

This refers to the latest commit in a particular branch, and when you add a new commit the different are performed against this commit, and once a commit is perform the latest commit will become the new `HEAD`.

Following the series analogy, the latest episode of a series would be the `HEAD` in a `branch`.

## Hook

This are scripts that run automatically every time a particular event occurs in a git repository.[^1]

This allows you to customized git internal behavior and trigger customizable actions in different key points in the development lifecycle.

Use case for git hooks could be preventing unwanted behavior or enforce quality control before committing, like [lint](https://en.wikipedia.org/wiki/Lint_%28software%29), testing or enforce code conventions.

## Main

This refers to the default branch that is used to keep track of the software, you could think of it like the base story line in a series.

This branch doesn't have to be called `main`, it could use any name but is usually the convention to call the default branch either `main` or `master` (not used as frequently because [Cultural sensitivity](https://www.theserverside.com/feature/Why-GitHub-renamed-its-master-branch-to-main)).

## Pull Request

When you are working with a remote directory, you usually want to develop changes in your local repo and then push those changes to a remote branch.

When you are working with a distributed system that uses a centralized point, and you would like to add those changes to this centralized point you make a `Pull Request`

Which basically means that you ask the maintainer/s of the project to merge the changes that you have into the project branch.

## Repository

Collection of commits, branches and tags to identify commits.

## Tag

When you are working on a git project you have a series of commits, commits are a changes that were applied to files inside the source code.

Tags are a way to choose a particular commit and mark a particular reference about them, for example you want to use to tag different release versions of the source code so it's easier to navigate in the future, instead of going throw all the commits and guess which one has the change that you are looking for.

## Version Control

This is a system that records changes to a file or set of files over time, and can recall specific versions of that system later in time.

## Working Tree

This is the directory, and the files and directory inside, that are associated with a [Repository](#repository).

This basically described all the files in the project that can be handled by git.

[^1]: 'Git Hooks', _Bitbucket_, 2022, https://www.atlassian.com/git/tutorials/git-hooks?section=conceptual-overview
