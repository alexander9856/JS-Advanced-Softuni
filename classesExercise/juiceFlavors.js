function juiceFlavors(arr) {
    let bottles = new Map();
    let juicesContainer = {};

    for (let i of arr) {
        let [fruit, quantity] = i.split(' => ');
        quantity = Number(quantity)
        if (!juicesContainer.hasOwnProperty(fruit)) {
            juicesContainer[fruit] = 0
        }

        juicesContainer[fruit] += quantity

        for (let j in juicesContainer) {
            let quantity = juicesContainer[j]
            if (quantity >= 1000) {
                let bottle = Math.trunc(quantity / 1000)
                if (!bottles.has(j)) {
                    bottles.set(j, 0)
                }
                juicesContainer[j] -= bottle * 1000
                bottles.set(j, bottles.get(j) + bottle)
            }
        }

    }
    for(let i of bottles){
        console.log(`${i[0]} => ${i[1]}`)
    }
}


juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']


)