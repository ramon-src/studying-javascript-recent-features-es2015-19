# DESTRUCTURING

The name is weard but seems to mean decomposing a structure into its individual parts.
It's like decompose some big thing into smaller parts, variables, properties and put they into another location.
This feature was in Javascript since the ES6 (ES2015) spec.

```js
var [{ name: firstName }, { email: firstEmail }] = getSomeDataApi();
```

In the left-hand of the equal operator we have a pattern which mean that we expect that data structure from the return of the function in the right-hand of the equal, called getSomeDataApi.

The Javascript will read the pattern and understand that he needs only get the two first objects of the array. Assign them into a variable.

```js
// Declarative imperative
function data() {
  return [1, , 3, 4];
}

var tmp = data();
var first = tmp[0];
var second = tmp[1] !== undefined ? tmp[1] : 10;
var third = tmp[2];

// Using deconstructing and apply default value

function data() {
  return [1, , 3, 4];
}
var [first, second = 10, third] = data();
```

Default value expression only picks up when there is an undefined value in the return of the pattern. As above in the second position. If it was null, we will not get 10 as value.

## Gather syntax to get the restant values

```js
// Declarative imperative
function data() {
  return [1, , 3, 4, 5, 6];
}

var tmp = data();
var third = tmp[2];
var fourth = tmp.slice(3); // this will return [4,5,6]

// Using deconstructing pattern and gather syntax

function data() {
  return [1, , 3, 4, 5, 6];
}
var [first, second = 10, third, ...fourth] = data();
```

If you want a new variable with the values of the pattern and want the decomposed parts too you can use like below

```js
function data() {
  return [1, , 3, 4, 5, 6];
}
var [first, second = 10, third, ...fourth] = (tmp = data());

// tmp will return [1, undefined, 3, 4, 5, 6]
// first 1
// fourth will return [4,5,6]
```

The destructuring is about assignment and not about declaration, so we can declare the variables before the desctructuring

```js
var first, second, third, fourth;

[first, second = 10, third, ...fourth] = data();

var test = {};

[test.first, test.second = 10, test.third, ...test.fourth] = data();

// then test variable  will returns {first: 1, second: 10, third: 3, fourth: [4,5,6]}

var test = [];

[test[3], test[4] = 10, test[5], ...test[8]] = data();

//[undefined, undefined, undefined, 1, 10, 3, undefined, undefined, [4, 5, 6]]; something like that
```

## SWAPPING VALUES

To swap values without a temporary variable we can use the deconstruct array to do the same work

```js
var x = 10;
var y = 20;

var tmp = x;
x = y;
y = tmp;
```

Using the deconstruct

```js
var x = 10;
var y = 20;

[y, x] = [x, y];
```

## DESTRUCTURING IN PARAMETERS

```js
function ([
  first,
  second,
  third
]) {
  //inside the function we can use the variables deconstructed
  // first, second and third
}
```

## ILLEGAL VALUES

If we pass null values or another other values into deconstruct array expression we will get a type error because we are trying to access positions in array to assign values to variables and the positions doesnt exists because the type is not an array

```js
function destruct([first, second, third]) {
  console.log(first);
}
destruct("a"); // this will pass because the js coercion converts the string into an array

//below all the results cause an type error
destruct({ b: 10 });
destruct(17);
destruct(17, "a", { b: 1 });
```

We can set a default value to fallback this errors, when the parameters are falsy they will return an empty array as below

```js
function destruct([first, second, third] = []) {
  console.log(first);
}
```
