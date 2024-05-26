const userEmail = "";

if (userEmail) {
    console.log("got user email");
}
else{
    console.log("don't have user email");
}

// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value 
// "0", 'false', " ", [], {}, function(){}

// check Array Empty
let myArray = []
if (myArray.length === 0) {
    console.log("Array is Empty");
}

// check object Empty
let myObject = {}
if (Object.keys(myObject).length === 0) {
    console.log("object is empty");
}
else{
    console.log("object is not empty");

}


// nullish coalescing operator (??): null, undefined

let vel1;
// vel1 = 3 ?? 6
// vel1 = null ?? 20 ?? 7
vel1 = undefined ?? 2 ?? 7

console.log(vel1);


// Terniary Operator
// condition ? true : false

let score = 100;

score <= 90 ? console.log("less than 80") : console.log("more than 80");