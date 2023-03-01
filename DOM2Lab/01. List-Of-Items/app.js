function addItem() {
    let item = document.getElementById('newItemText');

    let createNew = document.createElement('li');
    createNew.textContent = item.value;

    document.getElementById('items').appendChild(createNew)
}