class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(products) {
        products.forEach(el => {
            let splitted = el.split(' ')
            let name = splitted[0];
            let quantity = Number(splitted[1]);
            let totalPrice = Number(splitted[2]);
            if (totalPrice <= this.budgetMoney) {
                if (!this.stockProducts.hasOwnProperty(name)) {
                    this.stockProducts[name] = quantity
                }
                else {
                    this.stockProducts[name] += quantity
                }
                this.history.push(`Successfully loaded ${quantity} ${name}`)
                this.budgetMoney -= totalPrice
            }
            else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`)
            }
        })
        return this.history.join('\n')

    }
    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            let products = []
            neededProducts.forEach(el => {
                let splitted = el.split(' ')
                let product = splitted[0];
                let quantity = Number(splitted[1]);
                products.push({ product, quantity })
            })
            this.menu[meal] = { products, price }
        }
        else {
            return `The ${meal} is already in the our menu, try something different.`
        }
        let keys = Object.keys(this.menu)
        if (keys.length == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        }
        else {
            return `Great idea! Now with the ${meal} we have ${keys.length} meals in the menu, other ideas?`
        }
    }
    showTheMenu() {
        if (Object.keys(this.menu).length <= 0) {
            return "Our menu is not ready yet, please come later..."
        }
        else {
            let res = ''
            for (let i in this.menu) {
                res += `${i} - $ ${this.menu[i].price}\n`
            }
            return res.trim()
        }
    }
    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        else {
            let isCan = false
            let arr = []
            this.menu[meal].products.forEach(el => {
                if (this.stockProducts.hasOwnProperty(el.product)) {
                    if (this.stockProducts[el.product] >= Number(el.quantity)) {
                        isCan = true
                        let qtity = Number(el.quantity)
                        let name = el.product
                        arr.push({ name, qtity })
                    }
                    else {
                        isCan = false
                    }
                }
                else {
                    isCan = false

                }
            })
            if (isCan) {
                for (let i in this.stockProducts) {
                    let found = arr.filter(x => x.name == i)[0]
                    this.stockProducts[i] -= found.qtity
                }
                this.budgetMoney += this.menu[meal].price
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`

            }
            else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        }

    }
}
let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
