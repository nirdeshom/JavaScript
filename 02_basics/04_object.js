// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "12345";
tinderUser.name = "Nirdesh";
tinderUser.logedIn = true;

// console.log(tinderUser);

const regularUser = {
    email: "example@gmail.com",
    fullName: {
        getFullName: {
            firstNale: "Nirdesh",
            lastName: "Kumar",
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullName.getFullName.firstNale);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

// const obj4 = {obj1, obj2, obj3};
// const obj4 = Object.assign({}, obj1, obj2, obj3);

// Spread operator (...) multiple objects ko merge karke ek new object banata hai.
const obj4 = {...obj1, ...obj2, ...obj3};

// console.log(obj4);

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

console.log(users);
console.log(users[1].id);
console.log(users[1].email);

// note: iss ka output array formate me aayega
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

// object ko array of key-value pairs me convert karta
console.log(Object.entries(tinderUser));

// hasOwnProperty() JavaScript ka method hai jo check karta hai ki object ke paas koi specific property hai ya nahi.
console.log(tinderUser.hasOwnProperty("name")); // true


// ++++++++++ Object De-Strucure and JSON API ++++++++++++++++++

const couser = {
    courseName: "JavaScript",
    price: "199",
    courseInstructor: "Hitesh",
}

const {courseInstructor: instructor} = couser
console.log(instructor);

// {
//     "name": "Nirdesh",
//     "coourseName": "java",
//     "price": "free",
// }