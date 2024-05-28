function SayMyName() {
  console.log("N");
  console.log("I");
  console.log("R");
  console.log("D");
  console.log("E");
  console.log("S");
  console.log("H");
}
// SayMyName();

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {
  // let result = number1 + number2
  // return result;

  return number1 + number2;
}
// addTwoNumber(2, 5)
let result = addTwoNumber(4, 6);
// console.log("Result", result);

function loginUserName(username) {
    if(!username){
        console.log("Plz Enter a user name...");
        return
    }
    return `${username} just Login`
}
// console.log(loginUserName("nirdesh"))
// console.log(loginUserName())
// console.log(loginUserName("om"));


function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200));
// console.log(calculateCartPrice(200, 300, 400));

const user = {
    username: "nirdesh",
    prices: 199,
}

function handelObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handelObject(user)
handelObject({
    username: "nitya",
    price: 999
})

let myNewArray = [200, 300, 400];

function returnSecondValue(getArray){
    return getArray[0]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300]));

