// Primitive

// 7 type: String, Number, BigInt, Boolean, null, undefined,Symbol

let score = 122;
let BigInt = 123412341234123n;
let name = "Nirdesh Kumar";
let isLoogedIn = true;
let tempValue  = null;
let branch;

// console.log(typeof (score));
// console.log(typeof (true));

let id = Symbol('134')
let anotherId = Symbol('134')
// console.log(id === anotherId);
// console.log(typeof id);

// Reference (Non Primitive)

// Array, Object, function

let myArray = [1, 2, 3, "nirdesh", "omjeet"];

// console.log(myArray);
// console.log(typeof (myArray));

let myObject = {
    name: "nirdesh",
    age: 21,
    college: 'JLNP',
}

// console.log(myObject);
// console.log(typeof (myArray));

let myFunction = function(){
    console.log("my name is nirdesh");
}


console.log(myFunction);
console.log(typeof (myFunction));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive),  Heap (Non Primitive)

let myName = "Nirdesh Kumar";
let changeName = myName;
changeName = "Love Verma"

console.log(myName);
console.log(changeName);

let userOne = {
    email: "nir@gmail.com",
    age: 21,
}

let userTwo = userOne;
userTwo.email = "om@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

let myArr = ["Nirdesh", "Omjeet"]
let changeArr = myArr;

changeArr[0] = "Pooja";

console.log(myArr);
console.log(changeArr);

