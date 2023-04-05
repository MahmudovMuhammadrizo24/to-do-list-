
/*
  <div class="item">
            <p class="item-name">abs</p>
            <div class="icons">
                <i class="far fa-check-circle" style="color:#80cfa9;"></i>
                <i class="far fa-edit" style="color: #007bff;"></i>
                <i class="far fa-times-circle" style="color: crimson;"></i>
            </div>
        </div>
        //


*/

const inputField = document.querySelector('.input');
const addItemButton = document.querySelector('.add_item_btn');
const clearItemsButton = document.querySelector('.clear-item');
const container = document.querySelector(".container");
addItemButton.addEventListener('click', addItem);

function addItem() {
    const itemName = inputField.value.trim();

    if (itemName.length > 0) {
        addItemButton.addEventListener("click", function () {
            // item div
            const item = document.createElement("div");
            item.classList.add("item");
            // paragraph 
            const item_name = document.createElement("p");
            item_name.classList.add("item-name");
            // icons
            const icons = document.createElement("div");
            icons.classList.add("icons");
            // in icons i
            icons.innerHTML = ` <i class="far fa-check-circle" style="color:#80cfa9;"></i>
                                             <i class="far fa-edit" style="color: #007bff;"></i>
                                             <i class="far fa-times-circle" style="color: crimson;"></i>`
            item.appendChild(item_name, icons);

        })
        container.appendChild(item);
        inputField.value = '';
    } else {
        alert("please enter a word or number")
    }
}

clearItemsButton.addEventListener('click', clearItems);

function clearItems() {
    itemList.innerHTML = '';
}
