function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("R");
    console.log("D");
    console.log("E");
    console.log("S");
    console.log("H");

}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
    // let result = number1 + number2; 
    // console.log(result);
    // return result;   

    return number1 + number2;
}

let result = addTwoNumber(2, 4)
console.log("result:", result);

function userLoginMassage(username){
    if (username === undefined) {
        console.log("Plz enter a username");
        return;
    }
    return `${username} just logedd in`
}

let username = userLoginMassage("nirdesh")
console.log(username);


function myName(name){
    if(!name){
        console.log("Plz enter a name");
        return
    }
    return `${name} is login user`;
}

let name = myName()
console.log(name);

let x = 2;
if (x > 6) {
    console.log("hey");
}
else{
    console.log("bye");
}



// convert in Array
function calculateCartPrice(...num1){
    return num1;

}
console.log(calculateCartPrice(200, 300, 400));

const user = {
    name: "nirdesh",
    prices: 199,

}
function handelObject(anyobject){
    console.log(`name: ${anyobject.name} and price: ${anyobject.price}`);
}
// handelObject(user)

handelObject({
    name: "nirdesh kumar",
    price: 499
})


const myNewArray = [200 ,300 ,400 , 500];

function returnSecondValue(getArray){
    // return getArray;
    return getArray[0]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([800 ,300 ,400 , 500]));


let xv = [1, 2, 3]
function one(two){
    return two[1]
}
console.log(one(xv));


