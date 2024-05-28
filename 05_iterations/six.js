const coding = ["javascript", "java", "php", "python", "ruby"];

const value = coding.forEach((item) => {
  // console.log(item);
  return item;
});
// console.log(value)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNum = myNums.filter( (num) => num > 5)

// const newNum = myNums.filter( (num) => {
//     return num > 6
// })

const newNum = [];
myNums.forEach((num) => {
  if (num > 5) {
    newNum.push(num);
  }
});

console.log(newNum);



const books = [
  {
    title: "Book One",
    gener: "Fiction",
    publish: "1981",
    edition: 2004,
  },
  {
    title: "Book Two",
    gener: "Non-Fiction",
    publish: "1983",
    edition: 2006,
  },
  {
    title: "Book Three",
    gener: "History",
    publish: "1985",
    edition: 2008,
  },
  {
    title: "Book Four",
    gener: "Hindi",
    publish: "1987",
    edition: 2010,
  },
  {
    title: "Book Five",
    gener: "English",
    publish: "1989",
    edition: 2012,
  },
  {
    title: "Book Five",
    gener: "English",
    publish: "1959",
    edition: 2012,
  },
  {
    title: "Book Six",
    gener: "Science",
    publish: "1991",
    edition: 2014,
  },
  {
    title: "Book Seven",
    gener: "Java",
    publish: "1963",
    edition: 2002,
  },
  {
    title: "Book Seven",
    gener: "Java",
    publish: "1973",
    edition: 2012,
  },
];

let userBooks = books.filter( (bk) => bk.gener === "Java")
userBooks = books.filter( (bk) => {
    return bk.publish <= 1973 && bk.gener === "Java"
})

console.log(userBooks);