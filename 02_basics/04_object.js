// const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = 123;
tinderUser.name = "shilpee";
tinderUser.email = "nir@gmail.com";
tinderUser.isLogedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "n@gmail.com",
    fullname:{
        userfullname:{
            firstname: "nirdesh",
            lastname: "verma",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2 )  // good code
const obj3 = {...obj1, ...obj2}   // best code 
console.log(obj3);


const users = [
    {
        id: 1,
        email: "om@gmail.com",
    },

    {
        id: 2,
        email: "om@gmail.com",
    },

    {
        id: 3,
        email: "om@gmail.com",
    },
]

users[1].email
console.log(users);

console.log(tinderUser);
console.log(Object.keys (tinderUser));
console.log(Object.values (tinderUser));
console.log(Object.entries (tinderUser));

const one = {
    name: "nirdesh",
    age: 18,
    email: "om@gmailcom",
    password: "om123",

}

one.two = function(){
    console.log(`my name is ${this.name} email ${this.email}`);
}

console.log(one.two());

const course = {
    coursename: "JavaScript",
    price: 999,
    courseInstructor: "nirdesh",

}

// course.courseInstructor

// de-structuse object
const {courseInstructor: Instructor} = course

console.log(Instructor);

