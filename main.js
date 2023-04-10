
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
const container = document.querySelector(".container");

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
*/
/*
const input = document.querySelector('.input');
const addBtn = document.querySelector('.add_item_btn');
const container = document.querySelector('.container');

addBtn.addEventListener('click', addItem);

function addItem() {
    if (input.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const newItem = document.createElement('div');
    newItem.classList.add('item');

    const itemName = document.createElement('p');
    itemName.classList.add('item-name');
    itemName.textContent = input.value.trim();

    const iconsContainer = document.createElement('div');
    iconsContainer.classList.add('icons');

    const liner = createIcon('fa-check-circle', '#80cfa9', () => {
        itemName.style.textDecoration = 'line-through';
        newItem.style.color = 'blue';
        newItem.style.pointerEvents = 'none';
        liner.addEventListener('dblclick', function () {
            itemName.style.textDecoration = "line-through";
        });
    });

    const edit = createIcon('fa-edit', '#007bff', () => {
        input.value = itemName.textContent;
        container.removeChild(newItem);
    });

    const timesCircle = createIcon('fa-times-circle', 'crimson', () => {
        container.removeChild(newItem);
    });

    iconsContainer.append(liner, edit, timesCircle);
    newItem.append(itemName, iconsContainer);
    container.appendChild(newItem);

    input.value = '';
}

function createIcon(iconClass, color, clickHandler) {
    const icon = document.createElement('i');
    icon.classList.add('far', iconClass);
    icon.style.color = color;
    icon.addEventListener('click', clickHandler);
    return icon;
}

function clearItems() {
    container.innerHTML = '';
}

const clearBtn = document.querySelector('.clear-item');
clearBtn.addEventListener('click', clearItems);
*/


const input = document.querySelector('.input');
const addBtn = document.querySelector('.add_item_btn');
const container = document.querySelector('.container');
const clearBtn = document.querySelector('.clear-item');

addBtn.addEventListener('click', addItem);

function addItem() {
    if (input.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const newItem = document.createElement('div');
    newItem.classList.add('item');

    const itemName = document.createElement('p');
    itemName.classList.add('item-name');
    itemName.textContent = input.value.trim();

    const iconsContainer = document.createElement('div');
    iconsContainer.classList.add('icons');

    const liner = createIcon('fa-check-circle', '#80cfa9', () => {
        itemName.classList.toggle("active");

        //   itemName.style.textDecoration = 'line-through';
        //   newItem.style.color = 'blue';
        // newItem.style.pointerEvents = 'none';
    });



    const edit = createIcon('fa-edit', '#007bff', () => {
        input.value = itemName.textContent;
        container.removeChild(newItem);
    });

    const timesCircle = createIcon('fa-times-circle', 'crimson', () => {
        container.removeChild(newItem);
    });

    iconsContainer.append(liner, edit, timesCircle);
    newItem.append(itemName, iconsContainer);
    container.appendChild(newItem);

    // Save items to local storage
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(input.value.trim());
    localStorage.setItem('items', JSON.stringify(items));

    input.value = '';
}

function createIcon(iconClass, color, clickHandler) {
    const icon = document.createElement('i');
    icon.classList.add('far', iconClass);
    icon.style.color = color;
    icon.addEventListener('click', clickHandler);
    return icon;
}

function clearItems() {
    newItem.innerHTML = '';
    localStorage.removeItem('items');
}

// Load items from local storage on page load
window.onload = function () {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    for (let i = 0; i < items.length; i++) {
        const newItem = document.createElement('div');
        newItem.classList.add('item');

        const itemName = document.createElement('p');
        itemName.classList.add('item-name');
        itemName.textContent = items[i];

        const iconsContainer = document.createElement('div');
        iconsContainer.classList.add('icons');

        const liner = createIcon('fa-check-circle', '#80cfa9', () => {
            /*   itemName.style.textDecoration = 'line-through';
               newItem.style.color = 'blue';
               newItem.style.pointerEvents = 'none';*/
            itemName.classList.toggle("active");
        });



        const edit = createIcon('fa-edit', '#007bff', () => {
            input.value = itemName.textContent;
            container.removeChild(newItem);
        });

        const timesCircle = createIcon('fa-times-circle', 'crimson', () => {
            container.removeChild(newItem);
        });

        iconsContainer.append(liner, edit, timesCircle);
        newItem.append(itemName, iconsContainer);
        container.appendChild(newItem);
    }
}

clearBtn.addEventListener('click', clearItems);


