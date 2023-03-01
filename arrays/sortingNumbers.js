function sortingNums(arr) {
    let newArr = []
    while (arr.length > 0) {
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        min !== max ? newArr.push(min,max): newArr.push(max)
        arr.splice(arr.indexOf(min), 1);
        arr.splice(arr.indexOf(max), 1);
    }
    return newArr
}

sortingNums([1,2,3])