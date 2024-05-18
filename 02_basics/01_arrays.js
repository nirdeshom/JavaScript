let myArray = [1, 2, 3, 4, 5];

let myArr = ["nirdesh", "box", 1, 2, 3, 4];

let array = new Array(1, 2, 3, 4, 5);

// Accessing Array Elements
console.log(myArray[0]);

// Add Element to the end of Array
// myArray.push(0)  
// myArray.pop()    // remove Element to the end of Array

// Add Element to the start of Array
// myArr.unshift('om')
// myArr.shift()    // remove Element to the start of Array

console.log(myArr);
console.log(myArray)

// slice, splice
let myA1 = [1, 2, 3, 4, 5, 6]

console.log("A:", myA1);
console.log(myA1.slice(1, 3));
console.log("B:", myA1);

console.log(myA1.splice(1, 3));
console.log("c:", myA1);

let myHero = ["nirdesh", "om", "vimal", "anil"];

console.log(myHero.includes('nirdesh'));
console.log(myHero.indexOf("om"));

