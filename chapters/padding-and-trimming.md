# PADDING AND TRIMMING

The padding and trimming are now built in in the standart lib. They are already in the String prototype.

## PADDING

The string padding was added in es2017!
For the internacionalization settings the javascript implemented two ways of use the string padding which they are named as padStart, padEnd.

```js
let str = "Hello";
str.padStart(5); // "Hello"
str.padStart(8); // "   Hello"
str.padStart(8, "*"); // "***Hello"
str.padStart(8, "12345"); // "123Hello"
str.padStart(8, "ab"); // "abaHello"
str.padStart(9, "ab"); // "ababHello"
```

With the RTL system the javascript have problems when use multiline strings...

```js
let str = "Hello";
str.padEnd(5); // "Hello"
str.padEnd(8); // "Hello   "
str.padEnd(8, "*"); // "Hello***"
str.padEnd(8, "12345"); // "Hello123"
str.padEnd(8, "ab"); // "Helloaba"
str.padEnd(9, "ab"); // "Helloabab"
```

## TRIMMING

The string trimming method was in Javascript many time ago. But now in the es2019 spec the javascript added new methods for trimming strings.

```js
let str = "   Hello   ";
str.trimStart(); // "Hello   "
str.trimEnd(); // "   Hello"
str.trim(); // "Hello"
```
