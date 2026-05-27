
// const greet = function () {
//     console.log("Hello Nizam");
// };

// greet();


// function sayHello() {
//     console.log("Hello");
// }

// function  runFunction(callback) {
//     callback();
// }

// runFunction(sayHello);


// function processUser (name, callback) {
//     callback(name);
// }

// function greetUser(userName) {
//     console.log("Hello " + userName);
// }

// processUser("Nizam", greetUser);




// function creatGreeting(greeting) {
//     return function (nam){
//         console.log(greeting + " " + nam);
//     };
// }

// const sayHello = creatGreeting("Hello");

// sayHello("Nizam");
// sayHello("Ahmad");





// function calculate(amount, callback) {
//     return callback(amount);
// }

// function addVat(price) {
//     return price + (price * 5 /100);
// }

// const total = calculate(1000, addVat);

// console.log(total);


function processInvoice (amount, callback) {
    return callback(amount);
}

function calculateVAT(amount) {
    return amount * 5 / 100;
}
function calculateTotal(amount) {
    return amount + calculateVAT(amount);
}

console.log(processInvoice(2000, calculateVAT));
console.log(processInvoice(2000, calculateTotal));
