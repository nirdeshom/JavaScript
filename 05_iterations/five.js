const coding = ["java", "javascript", "c++", "c", "python"]

// coding.forEach( function (value){
//     console.log(value);
// })


// coding.forEach( (item) => {
//     console.log(item);
// })


// function printing(item){
//     console.log(item);
// }
// coding.forEach(printing)


coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})


const myCoding = [
    {
        languaegName: "javascript",
        languageFileName: "js",
    },

    {
        languaegName: "python",
        languageFileName: "py",
    },

    {
        languaegName: "java",
        languageFileName: "java",
    }
]

myCoding.forEach( (item) => {
    console.log(item.languaegName);
})

