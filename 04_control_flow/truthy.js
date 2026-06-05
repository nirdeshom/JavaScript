const userEmail = "";

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Dont't have user email");
}

// falsy value
// false, 0, -0, bitInt 0n, "", null, undefined, NaN

// truthy value 
// "0", 'false', " ", [], {}, function(){} 

const empArray = [];

if (userEmail.length === 0) {
    console.log("Array is Empty");
    
}

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

// nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 10 ?? 20;
// val1 = null ?? 20;
// val1 = undefined ?? 20;
val1 = undefined ?? 20 ?? 30;

console.log(val1);

// Terniary Operator 

// (condition) ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less then 80") : console.log("More than 80");