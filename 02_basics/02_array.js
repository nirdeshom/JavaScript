let myBrother = ["omjeet", "vimal", "anil", "nirdesh"];
let mySister = ["goldi", "pooja", "shilpee", "tanya"];

// myBrother.push(mySister);
// console.log(myBrother);

// let myfamily = myBrother.concat(mySister);
// console.log(myfamily);

let my_full_family = [...myBrother, ...mySister];   // best code
console.log(my_full_family);

const another_array = [1, 2, 3, [4, 5, 6], 7, [3, 4, 5, [6, 7, 8]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("nirdesh"));
console.log(Array.from("nirdesh"));   // convert string to array
console.log(Array.from({name: "nirdesh"}));    // interesting

let name1 = "nirdesh";
let name2 = "omjeet";
let name3 = "vimal";
console.log(Array.of(name1, name2, name3));

