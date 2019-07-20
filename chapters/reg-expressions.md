# REGULAR EXPRESSIONS

## LOOKBACK

The lookback is the use of the \$ character which means that the expression before it must be at the end of the string.

```js
let msg = "Hello World";
msg.match(/(l.)/g); // ["ll", "ld"]

msg.match(/(l.)$/g); // ["ld"]
```

## LOOKAHEAD

The ?= says: I want to ensure that the pattern like "o" does match.
So that's called a positive lookahead

```js
let msg = "Hello World";
msg.match(/(l.)/g); // ["ll", "ld"]

msg.match(/(l.)(?=o)/g); // ["ll"]
```

And using ?! we are negating, so we had a negative lookahead

```js
let msg = "Hello World";
msg.match(/(l.)/g); // ["ll", "ld"]

msg.match(/(l.)(?!o)/g); // ["lo", "ld"]
```
