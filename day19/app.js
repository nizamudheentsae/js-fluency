const expenseForm = document.getElementById("expenseForm");
const titleInput = document.getElementById("titleInput");
const amountInput = document.getElementById("amountInput");
const message = document.getElementById("message");
const expenseList = document.getElementById("expenseList");
const totalOutput = document.getElementById("totalOutput");
const clearBtn = document.getElementById("clearBtn");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  const amount = Number(amountInput.value);

  if (title === "") {
    message.innerText = "Expense title is required";
    message.style.color = "red";
    return;
  }

  if (amount <= 0) {
    message.innerText = "Amount must be greater than 0";
    message.style.color = "red";
    return;
  }

  const expense = {
    title: title,
    amount: amount,
  };

  expenses.push(expense);

  localStorage.setItem("expenses", JSON.stringify(expenses));

  message.innerText = "Expense added successfully";
  message.style.color = "green";

  titleInput.value = "";
  amountInput.value = "";

  renderExpenses();
});

clearBtn.addEventListener("click", function () {
  expenses = [];

  localStorage.removeItem("expenses");

  message.innerText = "All expenses cleared";
  message.style.color = "red";

  renderExpenses();
});

function renderExpenses() {
  expenseList.innerHTML = "";

  expenses.forEach(function (expense) {
    const li = document.createElement("li");
    li.innerText = expense.title + ": " + expense.amount;
    expenseList.appendChild(li);
  });

  const total = expenses.reduce(function (sum, expense) {
    return sum + expense.amount;
  }, 0);

  totalOutput.innerText = "Total: " + total;
}

renderExpenses();
