// პირველი დავალება

const array1 = [1, 2, 3, 4, 5];

array1.push("javascript", "python");
array1.unshift("html", "css");
console.log(array1.length);

array1.shift();
array1.pop();

console.log(array1);

// მეორე დავალება

const fruits = ["orange", "banana", "pear"];

console.log(fruits.length);

fruits.push("apple", "pineapple");
fruits.unshift("watermelon");
console.log(fruits.length);

fruits.splice(2, 0, "mango");
fruits.shift();
fruits.pop();
console.log(fruits.length);

console.log(fruits);

// მესამე დავალება

const array2 = [12, 25, 3, 6, 8, 14, 7, 23];

const arrayMap = array2.map((x) => x / 3);

console.log(arrayMap);

// მეოთხე დავალება

const array3 = [
  "hello",
  125,
  "javascript",
  "html",
  43,
  "css",
  "scss",
  "bootstrap",
  88,
  59,
  "python",
];

const array3Nums = array3.filter((item) => typeof item === "number");

console.log(array3Nums);

// მეხუთე დავალება

const languages = ["html", "css", "javascript", "python", "php"];

const langArray = languages.filter((item) => item.length > 3);

console.log(langArray);

// მეექვსე დავალება

const array4 = ["academy", "of", "digital", "industries"];

const initialValue = "";
const sumWithInitial = array4.reduce(
  (previousValue, currentValue) => previousValue + " " + currentValue,
  initialValue
);

console.log(sumWithInitial);

// მეშვიდე დავალება

const item = [12, "google", 32, null, "yahoo", 25];

const itemMap = item.map((x) => {
  if (typeof x === "number") {
    return Math.pow(x, 2);
  } else if (typeof x === "string") {
    return x.toUpperCase();
  } else return x;
});

console.log(itemMap);

// მერვე დავალება

const words = ["Madrid", "Rome", "Milan", "Berlin"];
const wordsWithM = words.filter(
  (word) => word.includes("M") || word.includes("m")
);
console.log(wordsWithM);