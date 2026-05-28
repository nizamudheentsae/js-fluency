const output = document.getElementById("output");

const expenses = [
    { title: "Food", amount: 25 },
    { title: "Metro", amount: 10 },
    { title: "Room Rent", amount: 1200 }
];

localStorage.setItem("expenses", JSON.stringify(expenses));

const savedExpenses = localStorage.getItem("expenses");

const convertedExpenses = JSON.parse(savedExpenses);

console.log(convertedExpenses);

const total = convertedExpenses.reduce(function (sum, expense) {
    return sum + expense.amount;
}, 0);

output.innerText = "Total expense: " + total;