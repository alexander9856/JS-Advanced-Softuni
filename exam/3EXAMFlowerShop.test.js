let { expect } = require('chai')
let flowerShop = require('./3EXAMFlowerShop')

describe('checks calcPriceOfFlowers function', () => {
    it('throws an error for invalid input', () => {
        expect(() => flowerShop.calcPriceOfFlowers('haha', 'baba', 1)).to.throw("Invalid input!")
        expect(() => flowerShop.calcPriceOfFlowers('haha', [], 1)).to.throw("Invalid input!")
        expect(() => flowerShop.calcPriceOfFlowers('haha', {}, 1)).to.throw("Invalid input!")

        expect(() => flowerShop.calcPriceOfFlowers('haha', 1, 'baba')).to.throw("Invalid input!")
        expect(() => flowerShop.calcPriceOfFlowers('haha', 2, {})).to.throw("Invalid input!")
        expect(() => flowerShop.calcPriceOfFlowers('haha', 3, [])).to.throw("Invalid input!")

        expect(() => flowerShop.calcPriceOfFlowers(1, 1, 2)).to.throw("Invalid input!")
        expect(() => flowerShop.calcPriceOfFlowers([], 2, 3)).to.throw("Invalid input!")
        expect(() => flowerShop.calcPriceOfFlowers({}, 3, 4)).to.throw("Invalid input!")
    })
    it('returns price for given flower', () => {
        expect(flowerShop.calcPriceOfFlowers('lale', 5, 10)).to.equal(`You need $50.00 to buy lale!`)
        expect(flowerShop.calcPriceOfFlowers('roza', 2, 30)).to.equal(`You need $60.00 to buy roza!`)
        expect(flowerShop.calcPriceOfFlowers('orhideq', 1, 50)).to.equal(`You need $50.00 to buy orhideq!`)

    })
})
describe('checks checkFlowersAvailable function', () => {
    it('returns for existing flower', () => {
        expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equal('The Rose are available!')
        expect(flowerShop.checkFlowersAvailable('Lily', ["Rose", "Lily", "Orchid"])).to.equal('The Lily are available!')
        expect(flowerShop.checkFlowersAvailable('Orchid', ["Rose", "Lily", "Orchid"])).to.equal('The Orchid are available!')
    })
    it('returns for non-existing flower', () => {
        expect(flowerShop.checkFlowersAvailable('Mushkato', ["Rose", "Lily", "Orchid"])).to.equal('The Mushkato are sold! You need to purchase more!')
        expect(flowerShop.checkFlowersAvailable('Slanchogled', ["Rose", "Lily", "Orchid"])).to.equal('The Slanchogled are sold! You need to purchase more!')
        expect(flowerShop.checkFlowersAvailable('Koledniche', ["Rose", "Lily", "Orchid"])).to.equal('The Koledniche are sold! You need to purchase more!')
    })
})
describe('checks sellFlowers function', () => {
    it('throws an error for invalid input', () => {
        expect(() => flowerShop.sellFlowers([], 'haha')).to.throw("Invalid input!")
        expect(() => flowerShop.sellFlowers([], [])).to.throw("Invalid input!")
        expect(() => flowerShop.sellFlowers([], {})).to.throw("Invalid input!")

        expect(() => flowerShop.sellFlowers(1, 1)).to.throw("Invalid input!")
        expect(() => flowerShop.sellFlowers('haha', 2)).to.throw("Invalid input!")
        expect(() => flowerShop.sellFlowers({}, 3)).to.throw("Invalid input!")
    })
    it('returns for valid input', () => {
        expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equal(`Rose / Orchid`)
        expect(flowerShop.sellFlowers(["Rose", "Orchid"], 1)).to.equal(`Rose`)
    })
})