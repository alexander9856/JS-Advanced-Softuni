function nthEl(arr, step) {
    return (arr.filter((v, i) => i % step == 0 ? v : ''))
}

console.log(nthEl(['1',
    '2',
    '3',
    '4',
    '5'],
    6
))