
// function calculateVAT(amount) {
//     return amount * 5 /100;
// }

// const vat = calculateVAT(2000);

// console.log(vat);


// const products = ["Laptop", "Mouse", "Keyboard"];

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);
// }



// const user = {
//     name: "Nizam", job: "MERN Developer", country: "UAE"
// };

// const {name, job, country} = user;

// console.log(name);
// console.log(job);
// console.log(country);


// const prices = [500, 1500, 3000, 700];

// const expensivePrices = prices.filter(function(price) {
//     return price > 1000;
// });

// console.log(expensivePrices);



// const invoiceItems = [
//     {name: "Laptop", price: 3000},
//     {name: "Mouse", price: 50},
//     {name: "Keyboard", price: 150}
// ]

// const total  = invoiceItems.reduce(function(sum,item) {
//     return sum + item.price;
// },0);

// console.log(total);


// const oldProduct = {
//     name: "Laptop",
//     price: 3000
// };

// const updatedProduct = {
//     ...oldProduct,
//     price: 3500,
//     vatRate: 5
// };

// console.log(oldProduct);
// console.log(updatedProduct);


// function processAmount(amount, callback){ 
//     return callback(amount);
// }

// function addVat(amount) {
//     return amount + amount *5/100;
// }

// const total = processAmount(1000, addVat);

// console.log(total);




const products = [
    {name: "Laptop", price: 3000},
    {name: "Mouse", price: 50},
    {name: "Keyboard", price: 150}
];

const expensiveProducts = products.filter(function(product){
    return product.price > 100;
});

const total = expensiveProducts.reduce(function(sum,product){
    return sum + product.price;
},0);

const finalAmount = total + total * 5 /100

console.log(expensiveProducts);
console.log(total);
console.log(finalAmount);