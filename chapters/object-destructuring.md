# OBJECT DESTRUCTURING

The difference between arrat and object destructuring is object destructuring pattern works with the source object and not the position of the object as we need in array destructuring.

So in an object destructuring we work with source object and each left key is a point of the key in the original object and at the right was the variable name for assign that key property.

```js
function data() {
  return {
    a: 10,
    b: 30,
    c: 50
  };
}
// a is the source : first is the target
var { a: first, b: second } = data();
```

# GATHER SYNTAX

To get the rest of the properties and assign into a new variable we need to use the ... to do it.

```js
function data() {
  return {
    a: 10,
    b: 30,
    c: 50,
    d: 60
  };
}
var { a: first, b: second, ...third } = data();
// So third will returns { c: 50, d: 60 }
```

# DEFAULT VALUES

```js
function data() {
  return {
    b: 30,
    c: 50,
    d: 60
  };
}

// a is the source : first is the target = 20 is the default
var { a: first = 20, b: second, ...third } = data();
```
