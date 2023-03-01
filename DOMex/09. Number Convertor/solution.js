function solve() {

    let input = document.getElementById('input');
    let result = document.getElementById('result')

    let selectMenu = document.getElementById('selectMenuTo');
    let binaryOption = document.createElement('option');
    let hexaOption = document.createElement('option');

    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';

    hexaOption.value = 'hexadecimal';
    hexaOption.textContent = 'Hexadecimal';

    selectMenu.appendChild(binaryOption);
    selectMenu.appendChild(hexaOption);

    let button = document.querySelector('button')
    button.addEventListener('click', calculate)

    function calculate(){
        if(selectMenu.value == 'binary'){
            result.value = Number(input.value).toString(2);

        }
        else if (selectMenu.value == 'hexadecimal'){
            result.value = Number(input.value).toString(16).toUpperCase()
        }
    }
}