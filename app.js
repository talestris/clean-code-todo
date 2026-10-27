const taskInput = document.getElementById("new-task");
const addTaskButton = document.querySelector(".add-button");
const incompleteTasksList = document.getElementById("incomplete-tasks");
const completedTasksList = document.getElementById("completed-tasks");

const createNewTaskElement = function (taskText) {
  const listItem = document.createElement("li");

  const checkbox = document.createElement("input");

  const label = document.createElement("label");

  const taskTextInput = document.createElement("input");

  const editButton = document.createElement("button");

  const deleteButton = document.createElement("button");
  const deleteButtonImg = document.createElement("img");

  label.innerText = taskText;

  checkbox.type = "checkbox";
  taskTextInput.type = "text";
  taskTextInput.className = "task-edit-input";

  editButton.innerText = "Edit";
  editButton.className = "button edit-button";

  deleteButton.className = "button delete-button";
  deleteButtonImg.src = "./remove.svg";
  deleteButton.appendChild(deleteButtonImg);

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(taskTextInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  editButton.addEventListener("click", editTask);
  deleteButton.addEventListener("click", deleteTask);
  checkbox.addEventListener("change", handleTaskStatusChange);

  return listItem;
};

const addTask = function () {
  if (!taskInput.value) return;
  const listItem = createNewTaskElement(taskInput.value);

  incompleteTasksList.appendChild(listItem);

  taskInput.value = "";
};

const editTask = function () {
  const listItem = this.parentNode;

  const taskTextInput = listItem.querySelector(".task-edit-input");
  const label = listItem.querySelector("label");
  const editButton = listItem.querySelector(".edit-button");
  const isEditMode = listItem.classList.contains("edit-mode");

  if (isEditMode) {
    label.innerText = taskTextInput.value;
    editButton.innerText = "Edit";
  } else {
    taskTextInput.value = label.innerText;
    editButton.innerText = "Save";
  }

  listItem.classList.toggle("edit-mode");
};

const deleteTask = function () {
  const listItem = this.parentNode;
  listItem.remove();
};

const handleTaskStatusChange = function () {
  const listItem = this.parentNode;

  const targetContainer = this.checked
    ? completedTasksList
    : incompleteTasksList;

  targetContainer.appendChild(listItem);
};

addTaskButton.addEventListener("click", addTask);

[...incompleteTasksList.children, ...completedTasksList.children].forEach(
  (task) => {
    const checkbox = task.querySelector("input[type=checkbox]");
    const editButton = task.querySelector(".edit-button");
    const deleteButton = task.querySelector(".delete-button");

    editButton.addEventListener("click", editTask);
    deleteButton.addEventListener("click", deleteTask);
    checkbox.addEventListener("change", handleTaskStatusChange);
  }
);
