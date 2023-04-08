
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

/*
const input = document.querySelector('.input');
const addIBtn = document.querySelector('.add_item_btn');
const item = document.querySelector(".item");
const clearItemsButton = document.querySelector('.clear-item');
const container = document.querySelector(".container");

// events
clearItemsButton.addEventListener('click', clearItems);

addIBtn.addEventListener("click", function () {
    if (input.value.trim() != 0) {
        const newItem = document.createElement("div");
        newItem.classList.add("item");

        const itemName = document.createElement("p");
        itemName.classList.add("item-name");
        itemName.innerText = input.value.trim();

        const iconsContainer = document.createElement("div");
        iconsContainer.classList.add("icons");

        const liner = document.createElement("i");
        liner.classList.add("far", "fa-check-circle");
        liner.id = "liner";
        liner.style.color = "#80cfa9";
        liner.addEventListener("click", function () {
            itemName.style.textDecoration = "line-through";
            item.style.backgroud = "grey";
        });

        const edit = document.createElement("i");
        edit.classList.add("far", "fa-edit");
        edit.id = "edit";
        edit.style.color = "#007bff";
        edit.addEventListener("click", function () {
            input.value = itemName.innerText;
            container.removeChild(newItem);
            item.style.pointerEvents = "none";
        });

        const timesCircle = document.createElement("i");
        timesCircle.classList.add("far", "fa-times-circle");
        timesCircle.id = "times-circle";
        timesCircle.style.color = "crimson";
        timesCircle.addEventListener("click", function () {
            container.removeChild(newItem);
        });

        iconsContainer.appendChild(liner);
        iconsContainer.appendChild(edit);
        iconsContainer.appendChild(timesCircle);

        newItem.appendChild(itemName);
        newItem.appendChild(iconsContainer);

        container.appendChild(newItem);

        input.value = "";
    } else {
        alert("Please enter a task");
    }
});

input.value = '';

function clearItems() {
    container.innerHTML = '';
}
*/

const input = document.querySelector('.input');
const addIBtn = document.querySelector('.add_item_btn');
const container = document.querySelector(".container");
addIBtn.addEventListener("dblclick", function () {

    const liner = createIcon("fa-check-circle", "#80cfa9", () => {
        itemName.style.textDecoration = "line-through";
        newItem.style.background = "white";
        item.style.pointerEvents = "all";
    });


})
addIBtn.addEventListener("click", function () {
    if (input.value.trim() != "") {
        const newItem = document.createElement("div");
        newItem.className = "item";

        const itemName = document.createElement("p");
        itemName.className = "item-name";
        itemName.textContent = input.value.trim();

        const iconsContainer = document.createElement("div");
        iconsContainer.className = "icons";

        const liner = createIcon("fa-check-circle", "#80cfa9", () => {
            itemName.style.textDecoration = "line-through";
            newItem.style.background = "grey";
            item.style.pointerEvents = "none";
        });

        const edit = createIcon("fa-edit", "#007bff", () => {
            input.value = itemName.textContent;

            container.removeChild(newItem);

        });

        const timesCircle = createIcon("fa-times-circle", "crimson", () => {
            container.removeChild(newItem);
        });

        iconsContainer.append(liner, edit, timesCircle);
        newItem.append(itemName, iconsContainer);
        container.appendChild(newItem);

        input.value = "";
    } else {
        alert("Please enter a task");
    }
});

function createIcon(iconClass, color, clickHandler) {
    const icon = document.createElement("i");
    icon.className = `far ${iconClass}`;
    icon.style.color = color;
    icon.addEventListener("click", clickHandler);
    return icon;
}

function clearItems() {
    container.innerHTML = '';
}

document.querySelector('.clear-item').addEventListener('click', clearItems);
input.value = '';



