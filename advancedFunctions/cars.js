function cars(arr) {
    let obj = {}

    arr.forEach(el => {
        let [c, n, k, v] = el.split(' ')
        let instr = {
            create: (name1, inherit, name2) =>
                obj[name1] = inherit ? Object.create(obj[name2]) : {},
            set: (name, key, value) =>
                obj[name][key] = value,
            print: (name) => {
                let array = []
                for (let key in obj[name]) {
                    array.push(`${key}:${obj[name][key]}`)
                }
                console.log(array.join(','))
            }
        }
        instr[c](n, k, v)
    })

}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)