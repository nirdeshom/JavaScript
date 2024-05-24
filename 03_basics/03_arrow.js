const user = {
  username: "nirdesh",
  price: 999,

  welcomeMassage: function () {
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMassage()
// user.username = "om";
// user.welcomeMassage()

// console.log(this);

function nir() {
  console.log(this);
}

// nir()

// function chai(){
//     let name = "nirdesh";
//     console.log(this.name);
// }

// chai()


// let chai = function chai() {
//   let name = "nirdesh";
//   console.log(this.name);
// }

// chai();

// Arrow function 
let chais = () => {
    let name = "nirdesh";
  console.log(this.name);

}
chais()


let myArrow = (num1, num2) => {
    return num1 + num2;
}

console.log(myArrow(2, 4));

// let addTwo = (number1, number2) => number1 + number2;
// let addTwo = (number1, number2) => (number1 + number2);

// objet return
let addTwo = (number1, number2) => ({username: "nirdesh"})

console.log(addTwo(3, 4))

