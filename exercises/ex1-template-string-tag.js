function printArray(strings, ...values) {
  console.log(strings);
  console.log(values);
  strings.forEach(element => {
    console.log(element);
  });
}

let arr = [1, 2, 3];
let foo = 456;
console.log(printArray`The number ${arr} and another ${foo} wow`);

console.log("=================");

function upper(strings, ...values) {
  let text = "";
  strings.forEach((str, i) => {
    let val = values[i];
    text += Boolean(val) ? `${str}${val.toUpperCase()}` : str;
  });
  return text;
}

let name = "ramon";
let twitter = "ramon-src";
let topic = "JS Recent parts";

console.log(upper`Hello ${name} (@${twitter}), welcome to ${topic}!`);
