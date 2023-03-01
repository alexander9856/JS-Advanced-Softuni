function lastKNumbers(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        if (i < k) {
            let sliced = arr.slice(0, k).reduce((a, b) => a + b, 0)
            arr.push(sliced)
        }
        else {
            let startIndex = i-k
            let sliced = arr.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0)
            arr.push(sliced)
        }
    }
    return arr
}
lastKNumbers(8, 2)