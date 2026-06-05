// for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element === 5) {
    // console.log("Number 5 is Best");
  }
//   console.log(element);
}

for (let i = 0; i <= 10; i++) {
  // console.log(`Inner loop value ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Outer loop value ${j} and inner loop value ${i}`);
  }
}

for (let i = 1; i <= 10; i++) {
//   console.log(`inner loop ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(i, "*", j, "=", i * j);
  }
}

const fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Grapes",
  "Papaya",
  "Watermelon",
  "Pineapple",
  "Pomegranate",
  "Strawberry",
];

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    // console.log(element);
    
}

// for(let index = 1; index <= 10; index++){
//     if (index === 5) {
//         console.log(`Detected ${index}`);
//         break;
//     }
//     console.log(index);
// }


for(let index = 1; index <= 10; index++){
    if (index === 5) {
        console.log(`Detected ${index}`);
        continue;
    }
    console.log(index);
}