

const expForm = document.getElementById("expForm");
const ExpInput = document.getElementById("ExpInput");
const amountInput = document.getElementById("amountInput");
const messageInput =document.getElementById("messageInput");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");
const clearBtn = document.getElementById("clearBtn");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
// let total = 0;


expForm.addEventListener("submit", function(event){
    event.preventDefault();

    const expenseItem = ExpInput.value.trim();
    const amount = Number(amountInput.value);

    if (expenseItem === ""){
        messageInput.innerText = "Please enter an expense.";
        messageInput.style.color = "red";
        return;

    }
    if (amount <= 0){
        messageInput.innerText = "Please enter a valid amount.";
        messageInput.style.color = "red";
        return;
    }

    const expense = {
        Name: expenseItem,
        Amount: amount
    };
    expenses.push(expense);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    messageInput.innerText = "Expense added successfully!";
    messageInput.style.color = "green";

    ExpInput.value = "";
    amountInput.value = "";

    updateExpenseList();


});


function updateExpenseList() {
    expenseList.innerHTML = "";

    expenses.forEach(function(expense, index){
        const li = document.createElement("li");
        li.innerText = expense.Name + ":" + expense.Amount;
        


        // EDIT BUTTON
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.style.marginLeft = "10px";

        editBtn.addEventListener("click", function(){
            const editExp = prompt("Edit Expense Name:", expense.Name);

            if (editExp === null) {
                return;
            }
            if (editExp.trim() === "") {
                return;
            }

            expenses[index].Name = editExp.trim();
            localStorage.setItem("expenses", JSON.stringify(expenses));
            updateExpenseList();
        });

        // DELETE BUTTON
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.style.marginLeft = "10px";

        deleteBtn.addEventListener("click", function(){
            expenses.splice(index, 1);
            localStorage.setItem("expenses", JSON.stringify(expenses));
            updateExpenseList();
        });

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        expenseList.appendChild(li);

    });

    

    const total = expenses.reduce(function(sum, expense){
        return sum + expense.Amount
    }, 0);

    totalAmount.innerText = "Total Amount: " + total;

};

updateExpenseList();




clearBtn.addEventListener("click", function(){
    expenses = [];

    localStorage.removeItem("expenses");

    messageInput.innerText = "All expenses cleared!";
    messageInput.style.color = "green";
    updateExpenseList();
});
