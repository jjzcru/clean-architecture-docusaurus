---
sidebar_position: 4
description: Specification on how to craft our commit messages.
---

# Conventional Commits

When we are working with git we need to create commits which are checkpoints for our code, and these requires message
to know which particular changes were performed at that point in time.

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#specification) is a specification on how to craft such commit messages.

This specification a simple and easy set of rules for creating an explicit commit history, by following this convention it makes it easy to build automated tool on top of it.

## Structure

The commit message structure follow something like this

```
<type>[optional scope][optional !]: <description>

[optional body]

[optional footer(s)]
```

This structure contains the structural elements to express the intent of each commit.

1. **types**: This element is one of the the available types that explain to which category the commit belongs to and is also **REQUIRED**, the types can be:
   - **feat**: Commit adds a new feature to your application or library.
   - **build**: Changes that affect the build system or external dependencies
   - **fix**: Commit represents a bug fix for your application.
   - **ci**: Changes to our CI configuration files and scripts
   - **docs**: Commit that are only related to documentation changes
   - **style**: Commit changes that do not affect the meaning of the code but rather code format convention like white-space, format, missing colons, etc.
   - **refactor**: Commit that do not fix a bug nor add a feature.
   - **perf**: Commit change that improves the performance of the program
   - **test**: Commits related to missing test or correct existing ones.
   - **chore**: Other changes that don't modify source code or test files
2. **scope**: This is an optional element that provides a contextual information about the commit, the scope is wrapped in parenthesis. E.g. `feat(i18n)`
3. **!** : This symbol is optional and indicates a breaking change
4. **description**: This element is **REQUIRED** and describes what happens in the commit, this is the short version of the commit.
5. **body**: This is an optional element that provides a further explanation on what happens in the commit.
6. **footers**: This is an optional element, unless is a `BREAKING CHANGE`, where you describe what is the breaking change that was introduced.

> The [Full Specification](https://www.conventionalcommits.org/en/v1.0.0/#specification) describes all the rules regarding Conventional Commit

## Benefits

- Automatically generate [CHANGELOGs](https://keepachangelog.com/en/1.0.0/)
- Easily determine the semantic version bump
- Easy transfer of knowledge to coworkers, public or stakeholders
- Can be use to run CI/CD
- Makes it easier to contribute to a project by giving potential contributors a change to explore a more structure commit history
- Remove the overhead of thinking what to write in a commit message since they have a format to rely on
- Help developer to focus the work that they are about to perform because they need to think about the commit message before they start working, it also provides them the space to know when to commit once they achieve the goal of the commit.

## Best practices

- ✅ Use a consistent case for the commit messages
- ✅ Introduce this convention at the starting phase of a project, thinking about it as its already launched
- ✅ Perform multiple commits with each one with one single goal in mind instead of a big commit with different type of changes
