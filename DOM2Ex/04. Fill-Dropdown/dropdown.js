function addItem() {
    let neWtext = document.getElementById('newItemText');
    let newValue = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.textContent = neWtext.value;
    option.value = newValue.value;
    
    let select = document.querySelector('#menu')
    select.appendChild(option)
    neWtext.value = '';
    newValue.value = '';


}