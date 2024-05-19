// variable 

const facbook_id = 12345678;
let facbook_name = "nirdesh";
let facbook_email = "sa@gmail.com";
var facbook_password = "sa@123";
let facbook_city;


// console.table([facbook_id, facbook_name, facbook_email, facbook_password, facbook_city]);

// facbook_id = 1234;   // const ki value change nhi hoti hai
facbook_password = "Nird@#12";
facbook_email = "n@gmail.com";

// console.table([facbook_id, facbook_name, facbook_email, facbook_password, facbook_city]);



// data type 

// primitive
// 7 type: Number, BigInt, String, Boolean, null, undefined, Symbol

let score = 1234;
let BigInt = 123412341234n;
let name = "nirdesh";
let isLoggedIn = true;
let temp = null;   // typeof => object
let myPasswoed;

let id = Symbol('123')
let anotherId = Symbol('123')
// console.log(id === anotherId);

// type check
// console.log(typeof (name));
// console.log(typeof (myPasswoed));
// console.log(id);

// Reference type (Non Primitive type)
// Array, Object, function

let myArray = [1, 2, 3, 4, 5]    // typeof => object

let myObject = {                  // typeof => object
    name: "nirdesh",
    age: 18,

}

let myFunction = function(){        // typeof => function
    console.log("hello javascript program");
}

// console.log(typeof (myArray));
// console.log(typeof (myObject));
// console.log(typeof myFunction);


// convertion

let conValue = "123a"
let valueInNumber = Number(conValue)
// let valueInString = String(conValue)
// let valueInBoolean = Boolean(conValue)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// String Method
let fullName = "Nirdesh Verma";
let age = 21;

console.log(`my full name: ${fullName} and age: ${age}`);

console.log(fullName.length);
console.log(fullName.indexOf('n'));
console.log(fullName.charAt(1));
console.log(fullName.includes('nirdesh'));
console.log(fullName.replace('nirdesh', 'Love'));
console.log(fullName.toLowerCase('n'));
console.log(fullName.toUpperCase('n'));

let myName = "    Nirdesh   "
console.log(myName.trim());
console.log(myName.trimEnd());
console.log(myName.trimStart());

let url = "nirdesh";
console.log(url.split(''));

let urlBy = "nirdesh-kumar-verma";
console.log(urlBy.split('-'));


// Number
let balance = 10000000;

console.log(balance.toString().length)
console.log(balance.toFixed(2))  // best code
console.log(balance.toLocaleString('en-IN'))   // best code

let largNumber = 1234.3453568;
console.log(largNumber.toPrecision(6))

// Math
console.log(Math.min(2, 3, 4, 1, 5, 6));
console.log(Math.max(2, 3, 6, 4, 1, 5));
console.log(Math.abs(-12));
console.log(Math.round(4.3));
console.log(Math.floor(4.3));
console.log(Math.ceil(4.3));

// Date
let myDate = new Date();

console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toString());   // best code
