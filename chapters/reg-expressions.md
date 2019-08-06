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

## CAPTURE GROUPS

They are not only a delimiter to group up regular expressions, now they have a good semantic way to group up and make reusable.

Capture groups allow us to place a part of match into a separate array and when we put a quantifier after that we refer to the whole thing inside the parenthesis.

```js
var msg = "Hello World";
msg.match(/.(l.)/); // dot "." matches any character (l.) l and . are inside the capture group.
// the return is ["ell", "ll"]

msg.match(/([jrl])o Wor\1/); // [jkl] are a character class, so any of them can match before the "o", The character class is a short hand for OR (j|k|l) and ranges [0-9]

// So in this case we are creating our first capture group so his name is \1 and this capture group matches a character class.
// The result will be "lo Worl" , "l" mathing only the "l" after "Wor" and before "o".
```

The better way to make capture groups is labeling the group of matches to be reusable and more user friendly

```js
msg.match(/(?<cap>[jrl])o Wor\k<cap>/).groups;

/*
 (?<capture-group-name>[jrl]) 
  Parenthesis for capture the group, the ? mark was to refer our capture group name, which is inside the <> before the expression that we want to match

  To refer the group intead to use \1 2 3... Now we can use \k and after the name of the group \k<capture-group-name>

  Using .groups we can get only the results of the captured groups named... That expression will return {cap: "l"}
*/
```

We can use capture groups in replaces and get them in functions callback too.

## DOT ALL MODE

Is a new feature bringing up in ES2018 which is a flag called "s" which needs to be declared in the end of the expression like "g"

This flag allow the regex matching in multiline texts.

```js
var msg = `
The quick brown fox
jumps over the
lazy dog`;

msg.match(/brown.*over/); // will return null
msg.match(/brown.*over/s); // will return ["brown fox\njumps over"]
```
