const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const clearBtn = document.getElementById("clearBtn");
const message = document.getElementById("message");
const todoList = document.getElementById("todoList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const todoText = todoInput.value.trim();

    if (todoText === "") {
        message.innerText = "Todo is required";
        message.style.color = "red";
        return;
    }

    todos.push(todoText);

    localStorage.setItem("todos", JSON.stringify(todos));

    message.innerText = "Todo added successfully";
    message.style.color = "green";

    todoInput.value = "";

    renderTodos();
});

clearBtn.addEventListener("click", function () {
    todos = [];

    localStorage.removeItem("todos");

    message.innerText = "All todos cleared";
    message.style.color = "red";

    renderTodos();
});

function renderTodos() {

    todoList.innerHTML = "";

    todos.forEach(function (todo, index) {

        const li = document.createElement("li");

        li.innerText = todo + " ";

        // EDIT BUTTON

        const editBtn = document.createElement("button");

        editBtn.innerText = "Edit";

        editBtn.addEventListener("click", function () {

            const updatedTodo = prompt(
                "Edit your todo",
                todo
            );

            if (updatedTodo === null) {
                return;
            }

            if (updatedTodo.trim() === "") {
                return;
            }

            todos[index] = updatedTodo;

            localStorage.setItem(
                "todos",
                JSON.stringify(todos)
            );

            renderTodos();
        });

        // DELETE BUTTON

        const deleteBtn = document.createElement("button");

        deleteBtn.innerText = "Delete";

        deleteBtn.addEventListener("click", function () {

            todos.splice(index, 1);

            localStorage.setItem(
                "todos",
                JSON.stringify(todos)
            );

            renderTodos();
        });

        li.appendChild(editBtn);

        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });
}

renderTodos();