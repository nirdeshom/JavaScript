function Hello(){
    console.log("Hello Nirdesh");
}

// Hello();

// function addTwoNumber(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumber(num1, num2){
    let result = num1 + num2;
    // console.log(result);
    // return result;
    return num1 + num2;
}


// console.log(addTwoNumber(2, 5));

let result = addTwoNumber(2, 3);
// console.log("Result:", result);

function justLoggedIn(username){
    if(!username){
        console.log("Please Enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(justLoggedIn());

function calculateCartPrice(...price){
    return price;

}

console.log(calculateCartPrice(10, 20, 30));  // [ 10, 20, 30 ]

let myObj = {
    name: "Nirdesh",
    price: 199,
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and price ${anyObject.price}`);
}
// console.log(handleObject(myObj));
console.log(handleObject({
    name: "omjeet",
    price: 299
}));

let myArray = [10, 20, 30];

function retureSecValue(myNewArray){
    console.log(`my secound value ${myNewArray[1]}`);
}
// console.log(retureSecValue(myArray));
console.log(retureSecValue([10, 300, 1000]));
