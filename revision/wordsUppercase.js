function wordsUpperCase(string) {
console.log(string.toUpperCase().match(/\w+/g).join(', '))
}

wordsUpperCase('Hi, how are you?') 
