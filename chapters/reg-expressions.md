# REGULAR EXPRESSIONS

## LOOKBACK

The lookback is the use of the \$ character which means that the expression before it must be at the end of the string.

```js
let msg = "Hello World";
msg.match(/(l.)/g); // ["ll", "ld"]

msg.match(/(l.)$/g); // ["ld"]
```
