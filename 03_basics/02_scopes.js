
let a = 100;
var c = 500;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;

    // console.log("INNER", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    let username = "nirdesh";
    function two(){
        let website = "youTube";
        console.log(username);
    }
    // console.log(website);

    // two();
}
one();

if(true){
    const username = "Nirdesh";
    if(username === "Nirdesh"){
        const website = " YouTube";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++ Interesting +++++++++++++++++

one(1);
function one(num1){
    return num1 + 1;
}

let two = function(num1){
    return num1 + 2;
}
two(2);
