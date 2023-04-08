
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



