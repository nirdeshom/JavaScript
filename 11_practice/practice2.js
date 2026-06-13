// String

let fname = "Nirdesh";
let lname = "kumar"

// .concat() → ka use do ya zyada strings ko jodne (concatenate karne) ke liye
let longName = fname.concat( lname);
console.log(longName);

console.log("Hello", fname, lname);
console.log(`Hello ${fname} ${lname}`)

// new String() → ek String Object create karta
let fullName = new String("Nirdesh Kumar");

// .at() and .charAt() → ka use string ke kisi specific index par character ko access karne ke liye hota hai.
console.log(fullName.at(0));
console.log(fullName.charAt(1));

// indexOf() → index deta hai.
console.log(fullName.indexOf('r'));
console.log(fullName.search('d'));

// includes() → true value match/false value not match
console.log(fullName.includes('Nirdesh'));

// length() → total character
console.log(fullName.length);

console.log(fullName.substring(0, 4));

console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());

let spaceRemove = "   Nirdesh   ";

console.log(spaceRemove.trimStart());
console.log(spaceRemove.trimEnd());
console.log(spaceRemove.trim());

let url = "https://chatgpt.com/c/nird-com-esh%20-hc.com";

console.log(url.search('com'));

console.log(url.replace('com', 'omi'));
console.log(url.replaceAll('com', 'omi'));

let hero = "spider-man-hai";

console.log(hero.split(''));
console.log(hero.split('-'));
