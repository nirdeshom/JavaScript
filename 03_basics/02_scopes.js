// var c = 500

let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
//   console.log("inner", a);
}

// console.log(a);
// console.log(b);
// console.log(c); // scope

function one() {
  const name = "nirdesh";

  function two() {
    const lastName = "verma"
    console.log(name);
  }

//   console.log(lastName);
  two()
}
// one()


if(true){
    const fName = "nirdesh";

    if (fName === "nirdesh") {
        const lName = "kumar";
        console.log(fName);
        
    }

    // console.log(lName);
}

// console.log(fName);

// ++++++++++++++++++ Interesting +++++++++++++++++++++++++

console.log(addone(2))

function addone(num){
    return num + 1
}

let addTwo = function(num){
    return num + 3
}
// addTwo(2)
console.log(addTwo(2));