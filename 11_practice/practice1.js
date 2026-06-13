// Convertion 
let score = "12";

console.log( typeof score)
console.log(score);

let stringChange = Number(score);
console.log(stringChange);
console.log(typeof stringChange);

// stack
let name = "Nirdesh";
let changeName = name;
changeName = "Hitesh"

console.log(name);
console.log(changeName);

// heap
let obj1 = {
    name: "Nirdesh",
    age: 21,
}

// because both references point to the same memory location.
let obj2  = obj1;
obj2.name = "Hitesh";

// ✅ Creates a new object (shallow copy)
let obj3 = {
    ...obj1
}
obj3.name = "Satish"

console.log(obj3);
console.log(obj2);
console.log(obj1);

// shallow copy
// course ek nested object hai. Shallow copy nested objects ko copy nahi karti, sirf unka reference copy karti hai.
let one = {
    name: "nirdesh",
    age: 21,
    course: {
        courseName: "web dev",
        price: 299,
    },
}

let two = {
    ...one  // Spread operator(...)
}

two.name = "Hitesh"
two.course.price = 199

console.log(two);
console.log(one);

// Deep Copy
let student = {
    name: "Nirdesh",
    address: {
        city: "Lucknow"
    }
};

let studentTwo = structuredClone(student);
studentTwo.name = "Hitesh";
studentTwo.address.city = "Noida"


console.log(studentTwo);
console.log(student);

// note 

// Shallow Copy: Top-level properties copy hoti hain, nested objects ka reference share hota hai.
// Deep Copy: Top-level aur nested objects sabki new copy banti hai, koi reference share nahi hota.

// { ...obj }  // Shallow Copy
// structuredClone()  // Deep Copy