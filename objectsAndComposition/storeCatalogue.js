function storeCata(arr) {
    let obj = {}
    for (let i of arr) {
        let [product, price] = i.split(' : ');
        price = Number(price);
        if(!obj.hasOwnProperty(product[0])){
            obj[product[0]] = {}
        }
        obj[product[0]][product] = price
    }

    let entries = Object.entries(obj).sort((a,b) => a[0][0].localeCompare(b[0][0]))
    for(let i of entries){
        console.log(i[0])
        Object.keys(i[1]).sort((a,b) => a.localeCompare(b)).forEach((el) => console.log(`  ${el}: ${i[1][el]}`))
        debugger
    }


}

storeCata(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)