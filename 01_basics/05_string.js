let name = "nirdesh";
let repoCount = 14;

console.log(`my name is ${name} and my repo Count is ${repoCount}`);

let myName = new String("nirdeshkumar");

console.log(myName[4]);
console.log(myName.charAt(3));
console.log(myName.indexOf('d'));

console.log(myName.__proto__);

console.log(myName.length);

console.log(myName.toUpperCase());
console.log(myName.toLocaleUpperCase());

console.log(myName.toLowerCase());
console.log(myName.toLocaleLowerCase());

const newString = myName.substring(0, 4);

console.log(newString);

const newStringOne = "    Nirdesh     ";

console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());

const url = "https://nirdesh.com/nirdesh%20kumar/nirdesh%20kumar";

console.log(url.replace('%20', '-'));
console.log(url.replaceAll('%20', '-'));

console.log(url.includes('nirdesh'));

const myWords = "hello-my-name-is-nirdesh";

// The split() method converts a string into an array by breaking the string at a specified separator.
console.log(myWords.split(""));
console.log(myWords.split("-"));

console.log(myWords.search('my'));
