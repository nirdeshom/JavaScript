// Object

const myObj = {
    name: "Nirdesh",
    "full name": "Nirdesh Kumar",
    age: 23,
    email: "n@google.com",
    password: "1234",
}

const myObj1 ={}
myObj1.name = "Hitesh";
myObj1.email = "n@chat.com";
myObj1. course = "Web Dev";
myObj1.pricse = 299;

console.log(myObj);
console.log(myObj1);

// access value
console.log(myObj.name);
console.log(myObj["email"]);
console.log(myObj["full name"]);

// update value 
myObj.password = "12ab";
console.log(myObj);

const User = {
    name: "Nirdesh",
    email: "n@google.com",
    password: "1234",
    courseDetels: {
        course: "web devlopment",
        pricse: 299,
    },
   greetOne: function(){
    console.log(`Hello ${this.name}`);
   },
   say() {
    console.log("Hello Function");
   }
}

User.address = function(){
    console.log(`${this.courseDetels.course}`);
}

User.greetOne()
User.say()
User.address()
console.log(User.courseDetels.course)

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

// const obj4 = {obj1, obj2, obj3};
// const obj4 = Object.assign({}, obj1, obj2, obj3);

// Spread operator (...) multiple objects ko merge karke ek new object banata hai.
const obj4 = {...obj1, ...obj2, ...obj3};

console.log(obj4);

const users = [
    {
        id: 1,
        email: "n@gmail.com",
    },
    {
        id: 2,
        email: "m@gmail.com",
    },
    {
        id: 3,
        email: "o@gmail.com",
    }
];

console.log(users[0].email);

// but value Array formate me aayegi
console.log(Object.keys(myObj));
console.log(Object.values(myObj));


console.log(Object.entries(myObj));
console.log(myObj.hasOwnProperty("skills"));

const data = {
    name: "Riya",
    courseName: "Python",
    Price: 599,
    skill: ["html", "css", "javascript"]
}

const {courseName: course} = data
console.log(course);
