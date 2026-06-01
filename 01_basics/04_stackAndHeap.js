// Stack (Primitive), 
// Copy by value kaam karta hai

let youTube = "nirdeshomdotcom";

let anotherYoutube = youTube;
anotherYoutube = "NirCodeCamp";

console.log(youTube);
console.log(anotherYoutube);

/*
Kya hua?
anotherYoutube = youTube me value copy hui
Original variable youTube change nahi hua
*/

// **********************************************************

// Heap (Non-Primitive)
// Copy by reference kaam karta hai

let userOne = {
    name: "nirdes",
    email: "nirdesh@google.com",
}

let userTwo = userOne;
userTwo.email = "nir@gmail.com";

console.log(userOne);
console.log(userTwo);

/*
Kya hua?
userTwo = userOne me reference copy hua
Dono same object ko point kar rahe hain
Isliye original object bhi change ho gaya
*/
