const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const clearBtn = document.getElementById("clearBtn");
const todoList = document.getElementById("todoList");
const message = document.getElementById("message");
const taskCount = document.getElementById("taskCount");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();

  if (todoText === "") {
    message.innerText = "Please enter a todo item.";
    message.style.color = "red";
    return;
  }

  todos.push(todoText);

  localStorage.setItem("todos", JSON.stringify(todos));

  message.innerText = "Todo item added successfully!";
  message.style.color = "green";

  todoInput.value = "";
  renderTodos();
});

clearBtn.addEventListener("click", function () {
  todos = [];
  localStorage.removeItem("todos");
  message.innerText = "All todo items cleared!";
  message.style.color = "red";
  renderTodos();
});

function renderTodos() {
  todoList.innerHTML = "";

  const taskCountValue = todos.length;
  taskCount.innerText = `Total Tasks: ${taskCountValue}`;
  console.log(taskCountValue);

  todos.forEach(function (todo, index) {
    const li = document.createElement("li");
    li.innerText = todo + " ";

    // EDIT BUTTON

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click", function () {
      const updatedTodo = prompt("Edit your todo item:", todo);

      if (updatedTodo === null) {
        return;
      }

      if (updatedTodo.trim() === "") {
        return;
      }

      todos[index] = updatedTodo;

      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos();
    });

    // DELETE BUTTON

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function () {
      const confirmed = confirm("Are you sure you want to delete this item?");

      if (!confirmed) {
        return;
      }

      todos.splice(index, 1);

      localStorage.setItem("todos", JSON.stringify(todos));

      renderTodos();
    });
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

renderTodos();
