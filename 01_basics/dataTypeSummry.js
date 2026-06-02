// Primitive

// 7 Type : String, number, bigInt, boolean, null, undefined, symbol
let name = "Chai Aur Code";
let score = 99;
let scoreValue = 99.9;
let isLoggedIn = true;
let isOutSide = null;
let sate;

let id = Symbol('123');
let anotherId = Symbol('123');

let myScore = 123123123123n;

console.log(id === anotherId);

// Refrence (Non-Primitive): array, object, function

let myArray = ["nirdes", "onjeet", "vimal", 1, 3, 5, true];

let myObj = {
    name: "Nirdesh",
    age: 23,
}

let myFunction = function(){
    console.log("Hello i am nirdesh");
}

console.log(myArray);
console.log(typeof myArray);
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof id);
console.log(typeof isOutSide);
console.log(typeof sate);
