function addAndRemove(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] == 'add' ? array.push(i+1) : array.pop()
    }
    array.length > 0 ? array.forEach((el) => console.log(el)) : console.log('Empty')
}
addAndRemove(['add', 
'add', 
'remove', 
'add', 
'add']



)