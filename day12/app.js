

// const oldProducts = ["Laptop", "Mouse", "Keyboard"];

// const newProducts = [...oldProducts, "Monitor"];

// console.log(oldProducts);
// console.log(newProducts);

// const oldUser = {
//     name: "Nizam",
//     job: "Accountant"
// };

// const newUser = {
//     ...oldUser,
//     job: "MERN Developer",
//     country: "UAE"
// };

// console.log(oldUser);
// console.log(newUser);



// const frontendSkills = ["HTML", "CSS", "JavaScript"];
// const backendSkills = ["Node.js", "Express", "MongoDB"];

// const fullStackSkills = [...frontendSkills, ...backendSkills];

// console.log(fullStackSkills);



// function calculateTotal (...prices) {
//     console.log(prices);

// }

// calculateTotal(100, 200, 300);



// function calculateTotal(...prices) {
//     const total = prices.reduce(function(sum,price){
//         return sum + price;
//     },0);
//     return total;
// }

// console.log(calculateTotal(100, 200, 300));
// console.log(calculateTotal(500, 1500, 3000));



const product = {
    name: "Laptop",
    price: 3000,
};

const updateProduct = {
    ...product,
    price: 3500,
    vatRate: 5
};

function calculateInvoice ({name, price, vatRate}) {
    const vatAmount = price * vatRate / 100;
    const total = price + vatAmount;

    console.log(`Product: ${name}`);
    console.log(`Price: ${price}`);
    console.log(`VAT Amount: ${vatAmount}`);
    console.log(`Total: ${total}`);
}

calculateInvoice(updateProduct);