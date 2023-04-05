// Create elements
/*
const container = document.querySelector(".container");
const input = document.querySelector(".input");
const add_item_btn = document.querySelector(".add_item_btn");
const item = document.querySelector(".item");

function init() {

}
function addItem() {

}

button.addEventListener("click", function () {
    if (input.value.length > 0) {
        item
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    } else {
        alert("Enter the Task first!");
    }
});

input.addEventListener("keypress", function (event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    } else if (event.keyCode === 13) {
        alert("Enter the Task First!")
    }
});
*/

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
const itemList = document.querySelector('.item');
const clearItemsButton = document.querySelector('.clear-item');

addItemButton.addEventListener('click', addItem);

function addItem() {
    const itemName = inputField.value.trim();

    if (itemName.length > 0) {
        const itemDetails = document.createElement('div');
        itemDetails.classList.add('item-details');


        const itemText = document.createElement('span');
        itemText.textContent = itemName;
        itemDetails.appendChild(itemText);

        const icons = document.createElement('div');
        icons.innerHTML = `
        <i class="far fa-check-circle" style="color:#80cfa9;"></i>
        <i class="far fa-edit" style="color: #007bff;"></i>
        <i class="far fa-times-circle" style="color: crimson;"></i>
    `;
        icons.classList.add('icons');
        itemDetails.appendChild(icons);

        const item = document.createElement('div');
        item.classList.add('icons');
        item.appendChild(itemDetails);

        itemList.appendChild(item);

        inputField.value = '';
    }
}

clearItemsButton.addEventListener('click', clearItems);

function clearItems() {
    itemList.innerHTML = '';
}
