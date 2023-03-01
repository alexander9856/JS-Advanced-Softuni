function sortAnArr(arr) {
    arr
        .sort((a, b) => a.length - b.length || a.localeCompare(b))
        .forEach((el) => console.log(el))
}

sortAnArr(['test', 
'Deny', 
'omen', 
'Default']



)