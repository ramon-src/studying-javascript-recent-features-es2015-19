# TEMPLATE TAG

The template tag is a function to pre processing the template literals.
This functions is extremely powerful, you can use not just to manipulate your strings in a loop. You can do whatever you want. The JSX is an example, you pass an string and it doesn't return a literal string it returns a DOM Object!

## THE SYNTAX

```js
function upper(strings, ...values) {
  strings.forEach(str => {
    values;
  });
}
let name = "ramon";
let twitter = "ramon-src";
let topic = "JS Recent parts";

upper`Hello ${name} (@${twitter}), welcome to ${topic}!`;
```
