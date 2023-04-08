
const input = document.querySelector(".entered_list");
const addBtn = document.querySelector(".add_list");
const tasks = document.querySelector(".tasks");

// add btn displayed
input.addEventListener("keyup", () => {
  if (input.value.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
});

// add new item to list
addBtn.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `
    <p>${input.value}</p>
          <div class="item_btn">
         
          <i class="fa-sharp fa-regular fa-square-check"></i>
          <i class="fa-solid fa-trash-can"></i>
          </div>`;
    tasks.appendChild(newItem);
    input.value = "";
  } else {
    alert("Pleas enter a task");
  }
});

// deleat item from list
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
    e.target.parentElement.parentElement.remove();
  }
});

// MARK item as completed

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-sharp fa-regular fa-square-check")) {
  }
  {
    e.target.parentElement.parentElement.classList.toggle("completed");
  }
});


