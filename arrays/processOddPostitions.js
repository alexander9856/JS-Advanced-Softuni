function processOddPos(arr) {

    let newArr = []
    for (let i in arr){
        if (i % 2 !== 0){
            newArr.push(arr[i] * 2)
        }
    }
    return (newArr.reverse())

}

processOddPos([10, 15, 20, 25])