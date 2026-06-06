const myNum = [1, 2, 3];

const myTotal = myNum.reduce( function (acc, currValue) {
    console.log(`acc value ${acc} and currValue ${currValue}`);
    return acc + currValue;
},0 )

const total = myNum.reduce((acc, currValue) => acc + currValue, 0)

console.log(myTotal);
console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

const pricePay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(pricePay);
