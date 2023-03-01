class ChristmasDinner {
    constructor(budget) {
        this._budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }
    set _budget(n) {
        if (n < 0) {
            throw new Error('The budget cannot be a negative number')
        }

        this.budget = n
    }
    shopping(arr) {
        let type = arr[0];
        let price = Number(arr[1]);
        if (price > this.budget) {
            throw new Error("Not enough money to buy this product")
        }
        else {
            this.products.push(type)
            this.budget -= price
            return `You have successfully bought ${type}!`
        }
    }
    recipes(obj) {
        let { recipeName, productsList } = obj;
        let isAllPresent = false
        for(let el of productsList){
            if (this.products.includes(el)) {
                isAllPresent = true
            }
            else {
                isAllPresent = false
                break
            }  
        }
       
        if (isAllPresent) {
            this.dishes.push({ recipeName, productsList })
            return `${recipeName} has been successfully cooked!`
        }
        else {
            throw new Error("We do not have this product")
        }


    }
    inviteGuests(name, dish) {
        let isFound = this.dishes.filter((x) => x.recipeName == dish)[0]
        if (!isFound) {
            throw new Error("We do not have this dish")
        }
        else if (this.guests.hasOwnProperty(name)) {
            throw new Error("This guest has already been invited")
        }
        else {
            this.guests[name] = dish
            return `You have successfully invited ${name}!`
        }
    }
    showAttendance() {
        let res = ``
        for (let i in this.guests) {
            let dish = this.guests[i]
            res += `${i} will eat ${this.guests[i]}, which consists of `
            let searchedDish = this.dishes.filter((x) => x.recipeName == dish)[0]
            searchedDish.productsList.forEach(el => res += `${el}, `)
            res = res.substring(0, res.length - 2) + '\n'
        }
        return res.trim()
    }

}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');

dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
