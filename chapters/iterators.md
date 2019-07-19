# ITERATORS

Using the symbol iterator we can make our data structures iterable.

```js
let str = "Hlo";
let strIterable = str[Symbol.iterator]();
strIterable.next(); // will return {value: "H", done: false}
strIterable.next(); // will return {value: "l", done: false}
strIterable.next(); // will return {value: "o", done: false}
strIterable.next(); // will return {value: undefined, done: true}
```

When we make data structures iterable we can use the for (of) loop to walk through the next values. Because the "for of" is the loop type to walk trought iterable values. So a String, an Array and a custom iterable value are options to use with "for of" loop.

```js
let str = "Hlo";
let strIterable = str[Symbol.iterator]();
for (let v of strIterable) {
  console.log(v);
}

let str2 = "Hello";
for (let v of str2) {
  console.log(v);
}
```
