// for 

for (let i = 1; i <= 10; i++) {
    // console.log(i);    
}

for (let j = 1; j <= 8; j++) {
    let element = j
    // console.log(element);

    if(element == 5){
        // console.log("5 best number");
    }
    
}

for (let i = 1; i <=5; i++) {
    const element = i
    // console.log(`Outer loop value: ${i}`);

    for (let j = 1; j <=10; j++) {
        const element = j;
        // console.log(`Inner loop value: ${j} and outer loop: ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

let myArr = ["nirdesh", "omjeet", "omjeet", "vimal"];
// console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    
}


// break and continue
//  for (let i = 0; i <= 10; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(i);
    
//  }


 for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(i);
    
 }