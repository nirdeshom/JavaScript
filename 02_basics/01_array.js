let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let hero = ["Nirdesh", "Omjeet", "Vimal", "Anil"];

console.log(myArray);
console.log(hero);
console.log(typeof hero);

let myNew = new Array(1, 2, 3, 4, 5, 6);
console.log(myNew);

// myArray.push(6);
// myArray.pop();

// myArray.unshift(0);
// myArray.shift();

console.log(myArray);
console.log(myArray.includes(4));  // true
console.log(myArray.indexOf(7));  // agar value nhi hai to -1 print hoga agar hai to 1 print hoga

// array convert to string 
let newArray = myArray.join();
console.log(newArray);

// slice and splice

console.log("A", myArray);
console.log(myArray.slice(1, 4));
console.log(myArray);

console.log("B", myArray);
console.log(myArray.splice(1, 5));
console.log(myArray);
