# FLAT AND FLATMAPS

The flat method is used to flatten nested arrays values down in.
These features was added in the ES2019.

```js
[1, [3, [2]], 4].flat(0); // will return the same array [1, [3, [2]], 4]
[1, [3, [2]], 4].flat(1); // will return the array with one level down [1, 3, [2], 4]
[1, [3, [2]], 4].flat(2); // will return the array with two level down [1, 3, 2, 4]
```

## FLATMAP

We can use the flatmap to make the flat then make a map.

```js
[1, 2, 3].flatMap(function(val) {
  return [val * 2, String(val * 2)];
});
/**
 * [[2, "2"],[4, "4"],[6, "6"]] the result of the map
 * then the flat function will be execute
 * [2, "2",4, "4",6, "6"] ;)
 *
 * It can be executed separetely
 */
[1, 2, 3]
  .map(function(val) {
    return [val * 2, String(val * 2)];
  })
  .flat();
```
