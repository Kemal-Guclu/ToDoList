const todoList = [];
const inputElm = document.querySelector(".todo-input");
const buttonElm = document.querySelector(".add-todo-btn");
buttonElm.addEventListener("click", addTodo);
inputElm.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

// Function to add a todo in the list
function addTodo() {
  const todoTxt = inputElm.value;
  if (todoTxt === "") {
    alert("Please enter a task");
    return;
  } else {
    const todoObject = {
      id: todoList.length + 1,
      task: todoTxt,
      done: false,
    };
    todoList.push(todoObject);
  }
  inputElm.value = "";
  renderTodos();
}

// Function to render todos in the list
function renderTodos() {
  const todoListElm = document.querySelector("ul");
  todoListElm.innerHTML = "";
  todoList.forEach((todo, index) => {
    const textContent = todo.task;
    let id = todo.id;
    const todoElm = document.createElement("li");
    todoElm.innerHTML = `${textContent}   ${
      todo.done ? "✅" : ""
    }<button class="delete-btn" onclick="deleteTodo(this)">Delete</button>`;
    todoListElm.appendChild(todoElm);
    // Toggle the done status of the todo
    todoElm.addEventListener("click", () => {
      todo.done = !todo.done;
      renderTodos();
    });
  });
}
// Function to delete a todo from the list
function deleteTodo(id) {
  todoList.splice(id, 1);
  console.log(todoList);
  console.log(id);
  renderTodos();
}
