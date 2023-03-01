function solve() {
    let check = document.querySelectorAll('tfoot tr td button')[0].addEventListener('click', quickCheck);
    let clear = document.querySelectorAll('tfoot tr td button')[1].addEventListener('click', clearAll);
    let table = document.querySelector('table')
    let message = document.querySelector('#check p');
    let inputs = document.querySelectorAll('input');


    function quickCheck(ev) {
        let tbody = document.querySelector('tbody');
        let matrix = [
            [inputs[0].value, inputs[1].value, inputs[2].value],
            [inputs[3].value, inputs[4].value, inputs[5].value],
            [inputs[6].value, inputs[7].value, inputs[8].value]
        ]
        let isSudomu = true

        for (let i = 0; i < matrix.length; i++) {
            let row = matrix[i];
            let col = matrix.map(row => row[i]);
            if (col.length != [...new Set(col)].length || row.length != [...new Set(row)].length) {
                isSudomu = false;
                break;
            }
        }

        if (isSudomu == true) {
            table.style.border = '2px solid green'
            message.textContent = "You solve it! Congratulations!"
            message.style.color = 'green'
        }
        else {
            table.style.border = '2px solid red'
            message.textContent = "NOP! You are not done yet..." 
            message.style.color = 'red'
        }
    }
    function clearAll(ev) {
        table.style.border = ''
        message.textContent = ''
        message.style.color = ''
        inputs.forEach((el) => el.value = '')
    }
}