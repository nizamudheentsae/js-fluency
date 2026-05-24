

// let company = "HLR Studio";

// function showCompany () {
//     console.log(company);
// }

// showCompany();


// function test() {
//     let employee = "Nizam";
//     console.log(employee);
// }

// test();

// console.log(employee);


// if (true) {
//     let city ="Dubai";
//     console.log(city);
// }

// console.log(city);


// function outer() {
//     let name = "Nizam";

//     function inner() {
//         console.log(name);
//     }

//     return inner;
// }

// const myFunction = outer();

// myFunction();


function counter () {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    }
}

const increase = counter();

increase();
increase();
increase();