function aggregateElements(arr) {
    let items = []

    items.push((arr.reduce((a, b) => a + b, 0)))

    let sumInverse = 0
    arr.forEach((el) => sumInverse += 1 / el)
    items.push(sumInverse)

    let concat = ''
    arr.forEach((el) => concat += el.toString())
    items.push(concat)

    items.forEach((el) => console.log(el))
}

aggregateElements([1, 2, 3])