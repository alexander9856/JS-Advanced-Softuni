function subSUm(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN
    }
    else {
        if (start < 0) start = 0
        if (end > arr.length - 1) end = arr.length - 1
        return (arr
            .slice(start, end + 1)
            .map(Number)
            .reduce((acc, x) => acc + x, 0));
    }

}
console.log(subSUm([10, 'twenty', 30, 40], 0, 2))