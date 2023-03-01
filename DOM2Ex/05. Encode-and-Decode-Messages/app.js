function encodeAndDecodeMessages() {
    let main = document.getElementById('main')

    let sendBtn = main.firstElementChild.querySelector('button').addEventListener('click', onClick);
    let decryptBtn = main.lastElementChild.querySelector('button').addEventListener('click', decrypt);


    let output = main.lastElementChild.querySelector('textarea');

    function onClick(ev) {
        let input = Array.from(document.querySelector('#container #main div textarea').value);
        let encryptedMsg = []
        for (let i = 0; i < input.length; i++) {
            let char = input[i].charCodeAt(0) + 1
            encryptedMsg.push(String.fromCharCode(char))
        }
        output.value = encryptedMsg.join('')
        document.querySelector('#container #main div textarea').value = ''

    }

    function decrypt(ev) {
        let decryptedMsg = []
        let outputArr = Array.from(output.value)

        for (let i = 0; i < outputArr.length; i++) {
            let char = outputArr[i].charCodeAt(0) - 1
            decryptedMsg.push(String.fromCharCode(char))
        }
        output.value = decryptedMsg.join('');
        main.lastElementChild.querySelector('button').removeEventListener('click', decrypt);
    }
}