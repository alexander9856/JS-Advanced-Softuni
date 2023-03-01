function evenPos(arr) {

    let res = []
    for (let i in arr) {
        if (i % 2 == 0) {
            res.push(arr[i])
        }
    }
    console.log(res.join(' '))

}

evenPos(['20', '30', '40', '50', '60'])