function rotateArr(arr, num) {
    for (let i = 1; i <= num; i++) {
        arr.unshift(arr.pop())
    }
    console.log(arr.join(' '))
}
rotateArr(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15

)