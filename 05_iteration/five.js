const myArray = ["Java", "JavaScript", "PHP", "Python", "Ruby"];

myArray.forEach(function (value) {
    // console.log(value);
})

myArray.forEach((item) => {
    // console.log(item);
})

function printMe(item){
    console.log(item);
}

myArray.forEach(printMe);

myArray.forEach((item, index, key) => {
    // console.log(item, index, key);
})


const myCoding  = [
    {
        languageName: "JavaScript",
        fileName: "js",
    },
    {
        languageName: "Java",
        fileName: "java",
    },
    {
        languageName: "Python",
        fileName: "py",
    }
];

// console.log(myCoding);

myCoding.forEach((item) => {
    console.log(item.fileName);
})

