

// const user = {
//     name: "Nizam", job: "Accountant",

//     sayHello: function () {
//         console.log("Hello Nizam");
//     }
// }

// user.sayHello();




// const user = {
//     name: "Nizam", job: "Accountant",

//     sayHello: function () {
//         console.log("Hello " + this.name);
//     }
// }

// user.sayHello();



// const user = {
//     name: "Nizam", job: "Accountant", country: "UAE",

//     introduce: function () {
//         console.log("Hello " + this.name);
//         console.log("I Am an " + this.job);
//         console.log("In " + this.country);
//     }
// }

// user.introduce();





// const user = {
//     name: "Nizam", job: "Accountant", country: "UAE",

//     introduce: function () {
//         console.log(
//             "My name is " + this.name +
//             ". I am an " + this.job +
//             " in " + this.country +
//             "."
//         );
//     }
// }

// user.introduce();

// user.job = "MERN Developer";

// user.introduce();



// const employee = {
//     name: "Nizam", monthlySlary: 6000,

//     calculateYearlySalary: function () {
//         return this.monthlySlary * 12; 
//     }
// };

// console.log(employee.calculateYearlySalary());



const product = {
    name: "Laptop", price: 3000, vatRate: 5,

    calculateVAT: function () {
        return this.price * this.vatRate / 100;
    },

    calculateTotal: function () {
        return this.price + this.calculateVAT();
    }
}

console.log(product.calculateVAT());
console.log(product.calculateTotal());