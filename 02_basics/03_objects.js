// singleton
// Object.create

// Object literals 

const mySym = Symbol("key")

const JsUser = {
    name: "nirdesh",
    "full name": "Nirdesh Verma",
    [mySym]: "key1",   // use symbol
    age: 21,
    location: "lakhimpur",
    email: "n@gmail.com",
    isLogedIn: false,

}

console.log(JsUser);
console.log(JsUser.name);
console.log(JsUser["full name"]);
console.log(JsUser["name", "email"]);
console.log(JsUser.mySym);

JsUser.email = "o@gmail.com";
console.log(JsUser);

// Object.freeze(JsUser); // freeze ka use liya ab koi value change nhi hogi 
// JsUser.email = "nirdesh@gmail.com";
// console.log(JsUser);


JsUser.one = function(){
    console.log("Hello JavaScript User");
}
console.log(JsUser.one());

JsUser.two = function(){
    console.log(`JS user Full Name: ${this["full name"]} and Email: ${this.email}`);
}
console.log(JsUser.two());

