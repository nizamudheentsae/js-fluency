

// const user = {
//     name:"Nizam", job: "MERN Developer", country: "UAE"
// };

// const {name, job, country} = user;


// console.log(name);
// console.log(job);
// console.log(country);


// const fruits = ["Apple", "Mango", "Orange"];

// const [firstFruit, secondFruit, thirdFruit] = fruits;

// console.log(firstFruit);
// console.log(secondFruit);
// console.log(thirdFruit);




// const fruits = ["Apple", "Mango", "Orange"];

// const [firstFruit, , thirdFruit] = fruits;

// console.log(firstFruit);
// console.log(thirdFruit);



// const user ={
//     name:"Nizam", job: "MERN Developer", country: "UAE"
// };

// const {name: userName, job: userJob} = user;

// console.log(userName);
// console.log(userJob);


// const user = {
//     name: "Nizam",
//     job: "MERN Developer"
// };

// const { name, job, country = "UAE" } = user;

// console.log(name);
// console.log(job);
// console.log(country);


// const user = {
//     name: "Nizam",
//     job: "MERN Developer",
//     country: "UAE"
// };

// function introduce ({ name, job, country }) {
//     console.log(`${name} is a ${job} in ${country}.`)};

// introduce(user);



const product = {
    name: "Laptop",
    price: 3000,
    vatRate: 5
};

function calculateInvoice ({name, price,vatRate}) {
    const vatAmount = price * vatRate / 100;
    const total = price + vatAmount;

    console.log(`Product: ${name}`);
    console.log(`Price: ${price}`);
    console.log(`VAT Amount: ${vatAmount}`);
    console.log(`Total: ${total}`);
}
calculateInvoice(product);