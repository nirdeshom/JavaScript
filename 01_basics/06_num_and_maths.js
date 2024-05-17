const score = 100;

const balance = new Number(100);

console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 1000000;

console.log(otherNumber.toLocaleString('en-IN'));

let decimal = 123.454645;

console.log(decimal.toPrecision(6));


// +++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.max(2, 3, 8, 5, 9));
console.log(Math.min(3, 2, 8, 5, 9));
console.log(Math.abs(-4));
console.log(Math.round(4.5));  // best
console.log(Math.ceil(4.5));
console.log(Math.floor(4.56));
