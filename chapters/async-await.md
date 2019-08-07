#ASYNC - AWAIT

This syntax came in ES2017, to be a good solution for callback hells and chaining responses.

Regards that we need to log some async data in order using a for each, or mapping, reducing... We can't use this functions because they are all synchronous functions. So when we pass the async keyword to the function inside of this iterators. We will not get the synchronous result of an await. Because these iterators doesn't know about async protocols.

So we can only use the await inside regular iterators like for, and while.

We can use a [library](https://github.com/getify/fasy) to use them with maps, each, reduces.

Async functions cannot be cancellable when they are already running.

## Async Generators

This is a good features to pull values from an API and can be consumed lazily as the results come.

```js
async function main() {
  for await (let text of fetchAsyncGenerators()) {
    console.log(text);
  }
}
```
