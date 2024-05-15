// your detelse 
let name = "Nirdesh Kumar";
let movieName = "DilWale";
let ticketPrice = 99;

// father detelse 
let fatherName = "Uma Shankar";
let fatherPrice = 100

let discountWala = 70;

// +++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(`my name is: ${name} movie name: ${movieName} and ticket price: ${ticketPrice}`);

console.log(`my father name: ${fatherName} movie : ${movieName} and ticket price: ${fatherPrice}`);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

let totalPrice = ticketPrice + fatherPrice;

console.log("my ticket total price:", totalPrice);


console.log(`father ticket price: ${discountWala}% Discount`);

// Discount Formula
let discountPrice = (fatherPrice * discountWala)/100;

console.log("off:", discountPrice);

let fDis = fatherPrice - discountPrice;

// console.log(`father ticket price: ${fatherPrice} and: ${discountWala} Discount Price with total: ${discountPrice} and total rupaye itne bane hai: ${fDis}`);

let current = totalPrice - discountPrice
console.log(fDis);
console.log(`Discount with total current price ${current}`);