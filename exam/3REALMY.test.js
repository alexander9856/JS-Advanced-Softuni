let { expect } = require('chai')
let chooseYourCar = require('./3REALMY')

describe('choosingType func', () => {
    it('throws an error for Invalid year', () => {
        expect(() => chooseYourCar.choosingType('haha','cherven',1899)).to.throw("Invalid Year!")
        expect(() => chooseYourCar.choosingType('haha','cherven',2023)).to.throw("Invalid Year!")
    })
    it('throws an error for Invalid string', () => {
        expect(() => chooseYourCar.choosingType('haha','cherven',2021)).to.throw("This type of car is not what you are looking for.")
        expect(() => chooseYourCar.choosingType('haha','cherven',1950)).to.throw("This type of car is not what you are looking for.")
    })
    it('to be picked', () => {
        expect(chooseYourCar.choosingType('Sedan','red',2010)).to.equal("This red Sedan meets the requirements, that you have.")
        expect(chooseYourCar.choosingType('Sedan','yellow',2011)).to.equal("This yellow Sedan meets the requirements, that you have.")

        expect(chooseYourCar.choosingType('Sedan','red',2009)).to.equal("This Sedan is too old for you, especially with that red color.")

    })
})
describe('brandName func', () => {
    it('returns for invalid input', () => {
        expect(() => chooseYourCar.brandName('haha',1)).to.throw("Invalid Information!")
        expect(() => chooseYourCar.brandName({},1)).to.throw("Invalid Information!")
        expect(() => chooseYourCar.brandName(1,1)).to.throw("Invalid Information!")

        expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],'haha')).to.throw("Invalid Information!")
        expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],[])).to.throw("Invalid Information!")
        expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],{})).to.throw("Invalid Information!")
        expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],5.5)).to.throw("Invalid Information!")
        expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],-1)).to.throw("Invalid Information!")
        expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],3)).to.throw("Invalid Information!")
    })
    it('returns for valid input', () => {
        expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],1)).to.equal('BMW, Peugeot')
        expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],2)).to.equal('BMW, Toyota')

    })
})
describe('CarFuelConsumption func', () => {
    it('returns for invalid input', () => {
        expect(() => chooseYourCar.carFuelConsumption(15,'haha')).to.throw("Invalid Information!")
        expect(() => chooseYourCar.carFuelConsumption(15,{})).to.throw("Invalid Information!")
        expect(() => chooseYourCar.carFuelConsumption(15,[])).to.throw("Invalid Information!")

        expect(() => chooseYourCar.carFuelConsumption('haha',15)).to.throw("Invalid Information!")
        expect(() => chooseYourCar.carFuelConsumption([],15)).to.throw("Invalid Information!")
        expect(() => chooseYourCar.carFuelConsumption({},15)).to.throw("Invalid Information!")

        expect(() => chooseYourCar.carFuelConsumption(-5,15)).to.throw("Invalid Information!")
        expect(() => chooseYourCar.carFuelConsumption(15,-5)).to.throw("Invalid Information!")







        
    })
    it('returns for valid input',() => {
        expect(chooseYourCar.carFuelConsumption(5,10)).to.equal('The car burns too much fuel - 200.00 liters!')
        expect(chooseYourCar.carFuelConsumption(10,0.7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.')
        expect(chooseYourCar.carFuelConsumption(10,0.6)).to.equal('The car is efficient enough, it burns 6.00 liters/100 km.')


    })
})
