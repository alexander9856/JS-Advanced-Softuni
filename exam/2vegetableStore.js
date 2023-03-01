class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = []
    }
    loadingVegetables(vegetables) {
        for (let i of vegetables) {
            let [type, quantity, price] = i.split(' ');
            quantity = Number(quantity)
            price = Number(price)
            if (this.availableProducts.length == 0) {
                this.availableProducts.push({ type, quantity, price })
            }
            else {
                let item = this.availableProducts.filter((x) => x.type === type)
                if (item.length == 0) {
                    this.availableProducts.push({ type, quantity, price })
                }
                else {
                    this.availableProducts.forEach((el) => {
                        if (el.type === type) {
                            el.quantity += quantity
                            if (el.price < price) {
                                el.price = price
                            }
                        }
                    })
                }
            }
        }
        let res = `Successfully added `
        this.availableProducts.forEach((el) => res += el.type + ', ')
        return res.slice(0, res.length - 2)



    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0
        for (let i of selectedProducts) {
            let [type, quantity] = i.split(' ')
            quantity = Number(quantity)
            let searched = this.availableProducts.filter((x) => x.type == type)[0]
            if (!searched) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            else {
                if (searched.quantity < quantity) {
                    throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                }
                else {
                    totalPrice += Number(searched.price) * quantity
                    searched.quantity -= quantity
                }
            }
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`


    }
    rottingVegetable(type, quantity) {
        let rotSearch = this.availableProducts.filter((x) => x.type == type)[0]
        if (!rotSearch) {
            throw new Error(`${type} is not available in the store.`)
        }
        else if (quantity > rotSearch.quantity) {
            rotSearch.quantity = 0
            return `The entire quantity of the ${type} has been removed.`
        }
        else {
            rotSearch.quantity -= quantity
            return `Some quantity of the ${type} has been removed.`
        }
    }
    revision(){
        let result = `Available vegetables:\n`
        let sorted = this.availableProducts.sort((a,b) => a.price - b.price)
        sorted.forEach((el) => result += `${el.type}-${el.quantity}-$${el.price}\n`)
        result += `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        return result
    }

}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
