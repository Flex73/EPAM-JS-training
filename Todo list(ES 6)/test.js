let list = [];

const addToList = () => {
    let newTask = document.getElementById('new-task');
    let todoList = document.getElementById('list');
    let item = document.createElement('li');

    item.onclick = removeFromList.bind(this, list.length);

    item.innerText = newTask.value;
    todoList.appendChild(item);
    list.push(newTask.value);

    newTask.value = '';
}

const removeFromList = (index) => {
    let todoList = document.getElementById('list');

    console.log(index);
    list.splice(index, 1);

    todoList.innerHTML = "";

    reconstructList();
}

const reconstructList = () => {
    let todoList = document.getElementById('list');
    
    list.map((task, index) => {
        let item = document.createElement('li');
        item.innerText = item;
        item.onclick = removeFromList.bind(this, index);
        todoList.appendChild(item);
    })
}

