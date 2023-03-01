class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = []
    }
    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.')
        }
        else {
            this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 })
            this.spaceAvailable -= spaceRequired
            return `The ${plantName} has been successfully planted in the garden.`
        }
    }

    ripenPlant(plant, qtity) {
        if (!this.plants.find((o) => o.plantName === plant)) {
            throw new Error(`There is no ${plant} in the garden.`)
        }
        for (let i of this.plants) {
            if (i.plantName == plant && i.ripe == true) {
                throw new Error(`The ${plant} is already ripe.`)
            }
        }
        if (qtity <= 0) {
            throw new Error(`"The quantity cannot be zero or negative."`)
        }

        let plantt = this.plants.filter((obj) => obj.plantName === plant)
        plantt[0].quantity += qtity
        plantt[0].ripe = true
        if (qtity == 1) {
            return `${qtity} ${plant} has successfully ripened.`
        }
        if (qtity > 1) {
            return `${qtity} ${plant}s have successfully ripened.`
        }

    }
    harvestPlant(plant) {
        if (!this.plants.find((o) => o.plantName === plant)) {
            throw new Error(`There is no ${plant} in the garden.`)
        }
        else{
            let plantToHarvest = this.plants.find((o) => o.plantName === plant)
            if (plantToHarvest.ripe === false) {
                throw new Error(`The ${plant} cannot be harvested before it is ripe.`)
            }
        }
        let plantToHarvest = this.plants.find((o) => o.plantName === plant)
        let index = this.plants.indexOf(plantToHarvest)
        this.plants.splice(index,1)
        let quantity = plantToHarvest.quantity;
        this.spaceAvailable += plantToHarvest.spaceRequired
        this.storage.push({plant,quantity})
        return `The ${plant} has been successfully harvested.`
        
    }
    generateReport(){
        let res = `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: `
        this.plants.sort((a,b) => a.plantName.localeCompare(b.plantName))
        this.plants.forEach((el) => res += el.plantName + ', ')
        res = res.substring(0,res.length-2)
        res += `\nPlants in storage: `
        if(this.storage.length == 0){
            res += 'The storage is empty.'
        }
        else{
            this.storage.forEach((el) => res += `${el.plant} `+`(${el.quantity}), ` )
        }
        return res.substring(0,res.length-2)
    }

}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());


