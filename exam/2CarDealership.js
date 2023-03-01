class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (model == '' || horsepower < 0 || !Number.isInteger(horsepower) || price < 0 || mileage < 0) {
            throw new Error(`Invalid input!`)
        }
        else {
            this.availableCars.push({ model, horsepower, price, mileage })
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
        }
    }
    sellCar(wantedModel, desiredMilleage) {
        let searchedCar = this.availableCars
            .filter((x) => x.model == wantedModel)[0]
        if (!searchedCar) {
            throw new Error(`${wantedModel} was not found!`)
        }
        else {
            if (searchedCar.mileage <= desiredMilleage) {
                searchedCar.price = searchedCar.price
            }
            else if (searchedCar.mileage- desiredMilleage <= 40000) {
                searchedCar.price *= 0.95
            }
            else if (searchedCar.mileage- desiredMilleage > 40000) {
                searchedCar.price *= 0.9
            }
        }
        let model = searchedCar.model;
        let horsepower = searchedCar.horsepower;
        let price = searchedCar.price
        this.soldCars.push({ model, horsepower, price })
        this.totalIncome += price
        this.availableCars.splice(this.availableCars.indexOf(searchedCar), 1)
        return `${model} was sold for ${price.toFixed(2)}$`
    }
    currentCar() {
        if (this.availableCars.length > 0) {
            let res = `-Available cars:\n`
            this.availableCars.forEach((el) => res += `---${el.model} - ${el.horsepower} HP - ${el.mileage.toFixed(2)} km - ${el.price.toFixed(2)}$\n`)
            return res.trim()
        }
        else {
            return "There are no available cars"
        }
    }
    salesReport(criteria) {
        if (criteria == 'horsepower' || criteria == 'model') {
            if (criteria == 'horsepower') {
                this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
            }
            else if (criteria == 'model') {
                this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
            }
            let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:\n`
            this.soldCars.forEach((el) => result += `---${el.model} - ${el.horsepower} HP - ${el.price.toFixed(2)}$\n`)
            return result.trim()
        }
        else {
            throw new Error("Invalid criteria!")
        }
    }


}


let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Toyota Corolla', 234324, 124234, 250000);

dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('model'));
