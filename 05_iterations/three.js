// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    // console.log(i);
}

const greetings = "Hello World";
for (const greet of greetings) {
    // console.log(greet);
    
}


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fra', "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


const myObject = {
    game1: "NFS",
    game2: "Spiderman",

}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

