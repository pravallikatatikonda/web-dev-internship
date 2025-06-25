const input = document.getElementById("taskInput");
const addButton = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    listItem.addEventListener("click", () => {
      listItem.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";

    deleteBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      listItem.remove();
    });

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    input.value = "";
  }
});
