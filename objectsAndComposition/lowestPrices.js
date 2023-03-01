function lowestPrices(arr) {
    let array = []
    for (let i of arr) {
        let [town, product, price] = i.split(' | ');
        price = Number(price);
        let findProduct = array.find((o) => o.product == product)
        if (!findProduct) {
            let obj = { town, product, price };
            array.push(obj)
        }
        else {
            if (findProduct.price > price) {
                findProduct.town = town;
                findProduct.price = price
            }
        }
    }
    array.forEach((el) => console.log(`${el.product} -> ${el.price} (${el.town})`))
}

lowestPrices([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'
]
)