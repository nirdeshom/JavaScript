let myArray = [1, 2]

// myArray.push(3);
// myArray.pop();

// myArray.unshift(3);
// myArray.unshift('nirdesh');
// myArray.shift();

// console.log(myArray);
// console.log(myArray[0]);
// console.log(myArray.includes(1));
// console.log(myArray.reverse());

let arrayOne = new Array(1, 2, 3, 4)
// console.log(arrayOne);

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// console.log("A:", arr);
// console.log(arr.slice(1, 4))
// console.log("A:", arr);

// console.log("B:", arr);
// console.log(arr.splice(1, 4))
// console.log("B:", arr);

let myName = ["ni", "om"]
let other = ["vk", "uk"]

// myName.push(other)
// console.log(myName);

// let full_data = myName.concat(other)   // good
let full_data_real = [...myName, ...other]  // best

// console.log(full_data);
// console.log(full_data_real);

let all_data = [1, 2, 3, [4, 5, 7], 8, 9, [0, 1, 2,[3, 4, 5]]]
// console.log(all_data.flat(Infinity));

// console.log(Array.isArray("NIRDESH"));
// console.log(Array.from("NIRDESH"));

// Object

const sym = Symbol("key")
let jsUser = {
    name: "nirdesh",
    [sym]: "key1",
    "full name": "nirdesh kumar",
    age: 18,
    email: "o@gmail.com",
    course: "diploma",

}

console.log(jsUser);
console.log(jsUser.name);
console.log(jsUser["full name", "age"]);

jsUser.email = "n@microsoft.com";
console.log(jsUser);

// Object.freeze(jsUser)  // freeze not changes
// jsUser.email = "n@chatgpt.com";

jsUser.one = function(){
    console.log("hello js");
}

console.log(jsUser.one());

jsUser.two = function(){
    console.log(`my name is: ${this["full name"]} and email: ${this.email}`);
}

console.log(jsUser.two());

