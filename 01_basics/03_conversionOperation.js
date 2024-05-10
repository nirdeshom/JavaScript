let score = "99abc";


// console.log(typeof score);
// console.log(typeof (score));

let strNumber = Number(score)

// console.log(strNumber);
// console.log(typeof strNumber);

// "99" => 99
// "99abc" => NaN 
// true => 1, false => 0

let isLoggedIn = 0;

let numBolleane = Boolean(isLoggedIn);
console.log(isLoggedIn);
console.log(numBolleane);

// 1 => true, 0 => false
// "" => false
// "Nirdesh" => true


// ************************** Operation **********************
// Arithmetic Operators:

// Addition +
console.log("Addition:", 3 + 3);

// Subtraction -
console.log("Subtraction:", 3 - 3);

// Multiplication *
console.log("Multiplication:", 3 * 3);

// Division /
console.log("Division:", 3 / 3);

// Modulus (Remainder) %
console.log("Remainder:", 10 % 3);

// Exponentiation **
console.log("Exponentiation:", 3 ** 3);   // 3*3*3


// Assignment Operators:
// Assignment =
let x = 20

// let y = x + 2;
// console.log(y);

// Addition assignment +=
//  x += 4;
//  console.log(x);

// Subtraction assignment -=
// x -= 4;
// console.log(x);

// Multiplication assignment *=
// x *= 4;
// console.log(x);

// Division assignment /=
// x /= 4;
// console.log(x);

// Modulus assignment %=
x %= 4;
console.log(x);

