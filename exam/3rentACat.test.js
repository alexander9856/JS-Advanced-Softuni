'use strict'
let { expect } = require('chai')
let rentCar = require('./3ExamrentCar')

describe('checks searchCar function', () => {
    it('throw an error for invalid input', () => {
        expect(() => rentCar.searchCar([], 300).to.throw("Invalid input!"))
        expect(() => rentCar.searchCar([], {}).to.throw("Invalid input!"))
        expect(() => rentCar.searchCar([], []).to.throw("Invalid input!"))

        expect(() => rentCar.searchCar(300, 'haha').to.throw("Invalid input!"))
        expect(() => rentCar.searchCar({}, 'haha').to.throw("Invalid input!"))
        expect(() => rentCar.searchCar('haha', 'haha').to.throw("Invalid input!"))
    })
    it('returns number of model in shop', () => {
        expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi')).to.equal(`There is 1 car of model Audi in the catalog!`)
        expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], 'BMW')).to.equal(`There is 2 car of model BMW in the catalog!`)
    })
    it('throws and error for no mathings', () => {
        expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Lambo')).to.throw()
        expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Ferrari')).to.throw()
    })
})
describe('checks calculatePriceOfCar function', () => {
    it('throws an erorr for invalid input', () => {
        expect(() => rentCar.calculatePriceOfCar('haha', [])).to.throw()
        expect(() => rentCar.calculatePriceOfCar('haha', 'baba')).to.throw()
        expect(() => rentCar.calculatePriceOfCar('haha', {})).to.throw()

        expect(() => rentCar.calculatePriceOfCar([], 5)).to.throw()
        expect(() => rentCar.calculatePriceOfCar({}, 10)).to.throw()
        expect(() => rentCar.calculatePriceOfCar(20, 15)).to.throw()

    })
    it('retuns for valid input', () => {
        expect(rentCar.calculatePriceOfCar('BMW', 20)).to.equal(`You choose BMW and it will cost $900!`)
        expect(rentCar.calculatePriceOfCar('Audi', 10)).to.equal(`You choose Audi and it will cost $360!`)
        expect(rentCar.calculatePriceOfCar('Toyota', 5)).to.equal(`You choose Toyota and it will cost $200!`)
        expect(rentCar.calculatePriceOfCar('Mercedes', 2)).to.equal(`You choose Mercedes and it will cost $100!`)
        expect(rentCar.calculatePriceOfCar('Volkswagen', 1)).to.equal(`You choose Volkswagen and it will cost $20!`)

    })
    it('returns for invalid model', () => {
        expect(() => rentCar.calculatePriceOfCar('Mercedes', 2)).not.to.throw()
        expect(() => rentCar.calculatePriceOfCar('Ferrari', 50)).to.throw()
        expect(() => rentCar.calculatePriceOfCar('Lambo', 10)).to.throw()
        expect(() => rentCar.calculatePriceOfCar('Aston Martin', 2)).to.throw()


    })
})
describe('checks checkBudget function', () => {
    it('throws an error for invalid input', () => {
        expect(() => rentCar.checkBudget('haha', 1, 2)).to.throw()
        expect(() => rentCar.checkBudget(1, 'haha', 2)).to.throw()
        expect(() => rentCar.checkBudget(1, 2, 'haha')).to.throw()

        expect(() => rentCar.checkBudget([], 1, 2)).to.throw()
        expect(() => rentCar.checkBudget(1, [], 2)).to.throw()
        expect(() => rentCar.checkBudget(1, 2, [])).to.throw()

        expect(() => rentCar.checkBudget({}, 1, 2)).to.throw()
        expect(() => rentCar.checkBudget(1, {}, 2)).to.throw()
        expect(() => rentCar.checkBudget(1, 2, {})).to.throw()
    })
    it('returns for budget > price', () => {
        expect(rentCar.checkBudget(10,2,20)).to.equal('You rent a car!')
        expect(rentCar.checkBudget(20,2,45)).to.equal('You rent a car!')
        expect(rentCar.checkBudget(30,3,108)).to.equal('You rent a car!')
    })
    it('returns for budget < price', () => {
        expect(rentCar.checkBudget(10,2,19)).to.equal('You need a bigger budget!')
        expect(rentCar.checkBudget(5,1,4)).to.equal('You need a bigger budget!')
        expect(rentCar.checkBudget(3,2,5)).to.equal('You need a bigger budget!')

    })
})