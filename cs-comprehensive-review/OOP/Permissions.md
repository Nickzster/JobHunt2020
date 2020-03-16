# Permissions

Classes generally have three permissions that can be assigned to values within a class:

- Private
- Public
- Protected

### Private

- NOTHING on outside the scope of the class can access a private value... only internal values and functions that belong to that certain class can access a private value.

### Public

- ANYTHING, including the class's internal methods and values, as well as functions outside the scope of the class, can access a public value.

### Protected

- NOTHING on the outside of the scope of the class can access a protected value... however, if a class _inherits_ another class with a protected value, the inherited class has access to it. Read more in the inheritance section.
