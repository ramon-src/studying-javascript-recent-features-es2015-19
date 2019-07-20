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
So I want to match when the l is followed by an "o", which is why we only get the ll.

```js
let msg = "Hello World";
msg.match(/(l.)/g); // ["ll", "ld"]

msg.match(/(l.)(?=o)/g); // ["ll"]
```

And using ?! we are negating, so we had a negative lookahead
And here we say that "l." needs to match when it's not followed by an o

```js
let msg = "Hello World";
msg.match(/(l.)/g); // ["ll", "ld"]

msg.match(/(l.)(?!o)/g); // ["lo", "ld"] this two are not followed by an o
```

## LOOKBEHINDS

This feature was released in ES18, now we have positive and negative lookbehinds

Below we only match "l." when it is preceded by an "e", which we get the "ll" match

```js
let msg = "Hello World";
msg.match(/(l.)/g); // ["ll", "ld"]

// the syntax for positive lookbehind is "<="
msg.match(/(?<=e)(l.)/g); // ["ll"]
```

And below we only match "l." when it is NOT preceded by an "e", which we get the "lo" and "ld" match

```js
let msg = "Helo Wlorld";
msg.match(/(l.)/g); // ["ll", "ld"]

// the syntax for negative lookbehind is "<!"
msg.match(/(?<!e)(l.)/g); // ["lo", "ld"]
```
