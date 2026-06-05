// singleton 
// Object.create

const mySym = Symbol('Key1');

// Object literals 
const JsUser = {
    name: "Nirdesh",
    "full name": "Nirdesh Kumar",
    age: 23,
    [mySym]: "myKey1",
    location: "Noida",
    email: "nirdesh@google.com",
    isLoggedIn: true,
    lastLoginDay: ["Monday", "Satursay"],

};

// console.log(JsUser);

// access object value
// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// update object value
JsUser.email = "nir@chatgpt.com";
// console.log(JsUser);

// Object.freeze(JsUser);  // object freeze krne se ab koi value update nhi hogi
JsUser.email = "nir@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello function");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this["full name"]}`); // object se value access kya
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

console.log(JsUser);
