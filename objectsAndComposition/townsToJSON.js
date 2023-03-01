function townsToJSON(arr) {
    let tokens = arr[0].substring(2, arr[0].length - 2).split(' | ');
    let town = tokens[0];
    let latitude = tokens[1];
    let longitude = tokens[2];
    arr.shift()

    let array = []

    for (let i of arr) {
        let towns = i.substring(2, i.length - 2).split(' | ')
        let obj = {}
        obj[town] = towns[0]
        obj[latitude] = Number(Number(towns[1]).toFixed(2))
        obj[longitude] = Number(Number(towns[2]).toFixed(2))
        debugger

        array.push(obj)
    }

    console.log(JSON.stringify(array))
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)