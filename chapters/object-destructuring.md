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

# SYNTAX PROBLEMS

When we are working with object destructuring using variables to assign the values of the pattern we cannot use the curly braces without the var before. Because the javascript transpiler will undertand that this syntax is a block syntax and not the destructuring pattern syntax.

```js
function data() {
  return {
    b: 30,
    c: 50,
    d: 60
  };
}

var first, second, third
// it will throw an error
{ a: first = 20, b: second, ...third } = data();
```

To fix that problem we need to assign it into a new variable

```js
function data() {
  return {
    a: 20,
    b: 30,
    c: 50,
    d: 60
  };
}

var tmp, first, second, third;

tmp = { a: first, b: second, ...third } = data();
// Or we need to use an parenthesis involving the whole expression
({ a: first, b: second, ...third } = data());
```

## DEFAULT VALUE FOR EMPTY OBJECTS

```js
function data() {
  return;
}

var { a: first, b: second, ...third } = data() || {};
```

When the source and target have the same name we can use as shown below

```js
function data() {
  return {
    first: 20
  };
}

var { first } = data() || {};
// And adding a fallback for default value to it...
var { first = 42 } = data() || {};
// So if first was set as null or undefined in data function we will get the 42 value
```

## NESTED OBJECTS

```js
function data() {
  return {
    a: 10,
    b: {
      c: 50,
      d: 70
    }
  };
}
var { a: first, b: { c, d } = {} } = data();
/*
  Then we will get
    first returning 10
    b as undefined
    c returning 50
    d returning 70
  If we have no b property in the data object returned we will get the empty object assign in the destructuring pattern
*/
```

## DEFAULT ASSIGNMENT PRACTICE

A better way to make the default assignment is

```js
var obj = {
  a: 10,
  b: 20,
  c: {
    a: 15
  }
};

var { a, b = 30, c = {} } = obj;
```

## PARAMETER OBJECTS

If you want to destructuring an object from parameters is not a good idea to add another parameters in a function. Why dont put the second parameter inside the object? ;)

```js
function data({ a = 10, c: { b } } = {}) {
  console.log(c);
}
data({ a: 5, c: { b: 10 } });
```
