let dealership = require('./3EXAMdealership');
let { expect } = require('chai')

describe('newCarCost function', () => {
    it('works', () => {
        expect(dealership.newCarCost('BmwBate', 2000)).to.equal(2000)

        expect(dealership.newCarCost('Audi A4 B8', 17000)).to.equal(2000)
        expect(dealership.newCarCost('Audi A6 4K', 25000)).to.equal(5000)
        expect(dealership.newCarCost('Audi A8 D5', 30000)).to.equal(5000)
        expect(dealership.newCarCost('Audi TT 8J', 17000)).to.equal(3000)

    })
})
describe('carEquipment function', () => {
    it('returns', () => {
        expect(dealership.carEquipment(['haha','baba'],[1,0])).to.deep.equal(['baba','haha'])
        expect(dealership.carEquipment([5,'baba'],[1,0])).to.deep.equal(['baba',5])
    })
})
describe('euroCategory function', () => {
    it('returns', () => {
        expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!')
        expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.')

    })
})
