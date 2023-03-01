function biggerHalf(arr) {

    let sorted = arr.sort((a, b) => a - b)
    return (sorted.slice(sorted.length / 2, sorted.length))



}

biggerHalf([3, 19, 14, 7, 2, 19, 6])