// Function declarations
function say(){
    console.log("Hello Function");
}

function hello(){
    return "Hello Nirdesh";
}
say()
hello()
let returnValue = hello()
console.log(returnValue);

function addTwo(x, y){
    // console.log(x + y);
    return x+y
}

addTwo(2, 2)
console.log(addTwo(1, 1));

function calculate(...converArray){
    console.log(converArray);
}
calculate(10, 20, 30, 40, 50);

let user = {
    name: "Nirdesh",
    age: 23,
    course: "web devlopment",
}

function accessValueObject(anyObject){
    console.log(`hello ${anyObject.name} your course ${anyObject.course}`);
}
console.log(accessValueObject(user));

let skills = ["java", "php", "python"]

function accessValueArray(anyArray){
    console.log(`array ki first value ${anyArray[0]}`);
}
console.log(accessValueArray(skills));

// arrow function
const name = () => {
    console.log("Helllo");
}

name();

// Function expressions
let myReturn = function(){
    console.log("Function expressions");
}
