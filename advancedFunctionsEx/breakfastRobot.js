function solution() {
    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }
    let products = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 }
    return function (input) {
        let [command, item, quantity] = input.split(' ')
        quantity = Number(quantity)
        switch (command) {
            case 'restock':
                products[item] += quantity;
                return 'Success';
            case 'prepare':
                return prepare(item, quantity);
            case 'report':
                return report()
        }
        function prepare(recipe, quantity) {
            let ingredientsNeeded = {}
            let isEnough = false
            for (let key in recipes[recipe]) {
                ingredientsNeeded[key] = recipes[recipe][key] * quantity
            }
            for (let key in ingredientsNeeded) {
                if (ingredientsNeeded[key] > products[key]) {
                    return `Error: not enough ${key} in stock`
                }
                else {
                    products[key] >= ingredientsNeeded[key] ? isEnough = true : isEnough = false
                }
            }
            if (isEnough) {
                for(let key in ingredientsNeeded){
                    products[key] -= ingredientsNeeded[key]
                }
                return 'Success'
            }
        }
        function report() {
            let res = ''
            for (let key in products) {
                res += `${key}=${products[key]} `
            }
            return res.trim()
        }
    }
}

let manager = solution();
console.log(manager('prepare turkey 1'))
console.log(manager('restock protein 10'))
console.log(manager('prepare turkey 1'))
console.log(manager('restock carbohydrate 10'))
console.log(manager('prepare turkey 1'))
console.log(manager('restock fat 10'))
console.log(manager('prepare turkey 1'))
console.log(manager('restock flavour 10'))
console.log(manager('prepare turkey 1'))
console.log(manager('report'))

