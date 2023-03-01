function argumentInf(...func) {
    let objCount = {}
    for (let i of func) {
        let type = typeof i
        console.log(`${type}: ${i}`)
        if (!objCount[type]) {
            objCount[type] = 0
        }
        objCount[type]++
    }
    Object.entries(objCount)
        .sort((a, b) => b[1] - a[1])
        .forEach(el => console.log(`${el[0]} = ${el[1]}`))
}
argumentInf({ name: 'bob' }, 3.333, 9.999)
