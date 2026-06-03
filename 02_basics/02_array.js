const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const another_array = [1, 2, 3, 4, 5, [6, 7, 8], 9, [10, 11 , 12, [13, 14, 15]]];
const real_another_array = another_array.flat(Infinity);  // array ke nadar 2-3 ya usse jiyada array hai to usko ek arraye me convert kr dega
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));  // false - iss liye ki ye array nhi hai
console.log(Array.from("Nirdesh"));  // convert to array
console.log(Array.from({name: "Nirdesh"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));  // output: [100, 200, 300]

// update array value 
const this_Array = ["Nirdesh", "Omjeet", "Satyam"];
this_Array[1] = "Vimal";
console.log(this_Array);
