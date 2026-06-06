const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumber.map((item) => {
    return item + 10;
})

const number = myNumber
.map((item) => item * 10)
.map((item) => item + 1)
.filter((item) => item >= 50)

// console.log(newNums);
console.log(number);