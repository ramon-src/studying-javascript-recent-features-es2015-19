# DESTRUCTURING

The name is weard but seems to mean decomposing a structure into its individual parts.
It's like decompose some big thing into smaller parts, variables, properties and put they into another location.
This feature was in Javascript since the ES6 (ES2015) spec.

```js
var [{ name: firstName }, { email: firstEmail }] = getSomeDataApi();
```

In the left-hand of the equal operator we have a pattern which mean that we expect that data structure from the return of the function in the right-hand of the equal, called getSomeDataApi.

The Javascript will read the pattern and understand that he needs only get the two first objects of the array. Assign them into a variable.
