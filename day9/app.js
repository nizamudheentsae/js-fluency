

// const products = ["laptop", "Mouse", "Keyboard"];

// products.forEach(function(product) {
//     console.log(product);
// });


// const numbers = [1,2,3,4];

// const doubled = numbers.map(function(num){
//     return num*2;

// });

// console.log(doubled);


// const prices = [500, 1500, 3000, 700];

// const expesivePrices = prices.filter(function (price){
//     return price > 1000;
// });

// console.log(expesivePrices);

// const products = [
//     { name: "Laptop", price: 3000},
//     { name: "Mouse", price: 50 },
//     { name: "Keyboard", price: 150 }
// ];

// const foundProduct = products.find(function(product){
//     return product.name === "Mouse";

// });

// console.log(foundProduct);


// const prices = [500, 1500, 3000, 700];

// const total = prices.reduce(function(sum, price) {
//     return sum + price;
// }, 0);

// console.log(total);


const invoiceItems = [
    { description: "Laptop", price: 3000},
    { description: "Mouse", price: 50},
    { description: "Keyboard", price: 150}
];

const total = invoiceItems.reduce (function(sum,item){
    return sum + item.price;
}, 0);

console.log(total);