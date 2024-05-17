// concat String

let name = 'nirdesh';
let age = 21;

console.log(`my name is ${name} and my age ${age} year old`);


let myName = "nirdesh Kumar";

console.log(myName.length);
console.log(myName.charAt(0));
console.log(myName.includes("nirdesh"));  //  true / false
console.log(myName.repeat(3));
console.log(myName.substring(0,3));

let indexOf = myName.indexOf("s");
console.log(indexOf);


let myFullName = new String("Nirdesh Kumar");

console.log(myFullName.toUpperCase());
console.log(myFullName.toLowerCase());

let mail = "Om@gmail.com";
console.log(mail.replace('gmail', 'chatgpt'));

let branch = '  information technology     ';
console.log(branch);
console.log(branch.trimStart());
console.log(branch.trimEnd());
console.log(branch.trim());

// String to array convert 
let url = "my name is nirdesh kumar verma";
console.log(url.split(" "));

let oneUrl = "https//nirdesh.om.in";
console.log(oneUrl.split('.'));