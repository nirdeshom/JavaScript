const myNuns = [1, 2,3, 4];

// const myTotal = myNuns.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);

let total = myNuns.reduce( (acc, current) => (acc + current),0)
console.log(total);

const shoppingcard = [
    {
        itemName: "javascript",
        price: 999,
    },
    {
        itemName: "java",
        price: 99,
    },
    {
        itemName: "python",
        price: 1299,
    },
]

let fullTotal = shoppingcard.reduce( (acc, itme) => (acc + itme.price),0)
console.log(fullTotal);