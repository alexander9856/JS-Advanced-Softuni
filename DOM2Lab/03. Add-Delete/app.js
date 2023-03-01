function addItem() {
    let item = document.getElementById('newItemText');
    let createNew = document.createElement('li');
    createNew.textContent = item.value;



    let btn = document.createElement('a');
    btn.href = '#';
    btn.textContent = '[Delete]';
    btn.addEventListener('click', removeElement);
    createNew.appendChild(btn)
    document.getElementById('items').appendChild(createNew)


    function removeElement(e){
        createNew.remove()
    }
}