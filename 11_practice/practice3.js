let myArr = [1, 2, 3, 4, 5];
let student = ["Ankush", "Nirdesh", "Uchit", "Satyam"];
let language = new Array('javascript', 'php', 'java', 'ruby', 'python');

console.log(language);
console.log(typeof language);  // object

myArr.push(6);  // last me element add
myArr.pop();  // last me element remove ke diya

myArr.unshift(0);  // array ke first me element add
myArr.shift();  // first me element remove

console.log(myArr);
console.log(myArr.includes(1));  // value match -> true / not-match -> false
console.log(myArr.indexOf(2));  // 1 -> value hai / -1 -> value nhi hai

// Array convert to string
console.log(myArr.join());

console.log("A", myArr);
console.log(myArr.slice(0, 3));
console.log("B", myArr);

console.log("C", myArr);
// last element not include and original array cut
console.log(myArr.splice(0, 3));
console.log("D", myArr);

const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// marvel_heros.push(dc_heros);  // array me array chala gya
let newArray = marvel_heros.concat(dc_heros)
console.log(newArray);

let new_array = [...marvel_heros, ...dc_heros];
console.log(new_array);

let largeNumber = [1, 2, 3, 4, [5, 6, 7, [8, 9, 10]], 11];
console.log(largeNumber.flat(Infinity));

let score1 = 100;
let score2 = 100;
let score3 = 100;

console.log(Array.of(score1, score2, score3));

