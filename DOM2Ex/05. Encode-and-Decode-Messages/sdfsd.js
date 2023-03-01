let msg = "habibi"
let newMsg = ''
for (let i = 0; i < msg.length; i++) {
    let char = msg[i].charCodeAt(0) + 1
    newMsg += String.fromCharCode(char)
}

console.log(newMsg)