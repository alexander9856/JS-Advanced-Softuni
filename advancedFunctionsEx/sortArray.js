function sortArray(arr, arg) {
    switch (arg) {
        case 'asc':
            return arr.sort((a, b) => a - b)
        case 'desc':
            return arr.sort((a, b) => b - a)
    }
}
console.log(sortArray([14, 7, 17, 6, 8], 'desc'))