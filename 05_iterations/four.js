const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["cpp", "java", "py", "rb"];

for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
}


