function biggestEl(arr) {
let biggest = Number.MIN_SAFE_INTEGER

    for (let i of arr){
        for (let b of i){
            if (b > biggest){
                biggest = b
            }
        }
    }
    return biggest

}
biggestEl([[20, 50, 10],
[8, 33, 145]]
)