# TEMPLATE TAG

The template tag is a function to pre processing the template literals.
This functions is extremely powerful, you can use not just to manipulate your strings in a loop. You can do whatever you want. The JSX is an example, you pass an string and it doesn't return a literal string it returns a DOM Object!

## THE SYNTAX

```js
function foo(strings, ...values) {
  // do whatever you want
}
let a = [1, 2, 3];

foo`Try this ${a}`;
```
