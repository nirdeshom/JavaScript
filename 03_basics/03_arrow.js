let user = {
    username: "Nirdesh",
    price: 299,

    message: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.message();
// user.username = "Hitesh";
// user.message()

// console.log(this);

function chai(){
    console.log(this);
}
// chai();

function chaiHai(){
    let user = "Nirdesh";
    console.log(this.user);
}
// chaiHai()

// this object me kaam krta hai but function me nhi

let arrowFun = () => {
    let name = "Nirdes";
    console.log(this.name);
}
arrowFun();

let addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(2, 4));

// let moreNumber = (num1, num2) => num1 + num2;
// let moreNumber = (num1, num2) => (num1 + num2);
let moreNumber = (num1, num2) => ({name: "Nirdesh"});

console.log(moreNumber(2, 3));
