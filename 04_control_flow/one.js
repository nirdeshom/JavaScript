// if

/*
if (condition) {
    // code
}
*/

const isUserLoggedIn = true;
const temperature = 41;

if(temperature === 4){
    console.log("less than 41");
    // condition true - hai to ye code execute hoga
}
else{
    console.log("temperature greater than 41");
    // condition false - hai to ye code execute hoga
}

// <, >, >=, <=, !=, !==, ==, ===

// const score = 100;

// if(score > 50){
//     let power = "fly";
//     console.log(`User Power ${power}`);
// }
// console.log(`User Power ${power}`);

// const balance = 100;

// if(balance < 50){
//     console.log("less than 50");

// } else if(balance < 90){
//     console.log("less than 90");

// } else{
//     console.log("less than 120");
// }

const userLoggedIn = true;
const debitCart = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCart && 2 === 3) {
    console.log("Allow to buy course");
    // all condition true hai to code execute hoga
    
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Logged in");
    // dono me agar ek bhi condition true hai to code execute hoga
}

