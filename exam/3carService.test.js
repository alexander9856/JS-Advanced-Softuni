let { expect } = require('chai')
let carService = require('./3carService')


describe('check isItExpensive function', () => {
    it('returns for Engine and Transmission', () => {
        expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money')
        expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money')
    })
    it('returns for other parts of the car', () => {

        expect(carService.isItExpensive('mirrors')).to.equal('The overall price will be a bit cheaper')
        expect(carService.isItExpensive('windows')).to.equal('The overall price will be a bit cheaper')
        expect(carService.isItExpensive('doors')).to.equal('The overall price will be a bit cheaper')
        expect(carService.isItExpensive('clima')).to.equal('The overall price will be a bit cheaper')
        expect(carService.isItExpensive('seats')).to.equal('The overall price will be a bit cheaper')
    })
})

describe('check discount function', () => {
    it('retuns for invalid input', () => {
        expect(() => carService.discount('1', 300).to.throw("Invalid input"))
        expect(() => carService.discount([], 200).to.throw("Invalid input"))
        expect(() => carService.discount({}, 100).to.throw("Invalid input"))

        expect(() => carService.discount(100, {}).to.throw("Invalid input"))
        expect(() => carService.discount(200, []).to.throw("Invalid input"))
        expect(() => carService.discount(300, '2').to.throw("Invalid input"))
    })

    it('returns you cannot apply a discount if numberOfParts <= 2', () => {
        expect(carService.discount(1, 300)).to.equal("You cannot apply a discount")
        expect(carService.discount(0, 300)).to.equal("You cannot apply a discount")
        expect(carService.discount(2, 300)).to.equal("You cannot apply a discount")
    })

    it('calculating discount and apply', () => {
        expect(carService.discount(3, 15)).to.equal(`Discount applied! You saved 2.25$`)
        expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved 15$`)
        expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved 30$`)
        expect(carService.discount(20, 500)).to.equal(`Discount applied! You saved 150$`)



    })
})

describe('check partsToBuy function', () => {
    it('returns 0 for empty partsCatalog', () => {
        expect(carService.partsToBuy([], ['machine'])).to.equal(0)
    })
    it('returns for invalid input', () => {
        expect(() => carService.partsToBuy([], 2).to.throw("Invalid input"))
        expect(() => carService.partsToBuy([], {}).to.throw("Invalid input"))
        expect(() => carService.partsToBuy([], '1').to.throw("Invalid input"))

        expect(() => carService.partsToBuy(2, []).to.throw("Invalid input"))
        expect(() => carService.partsToBuy({}, []).to.throw("Invalid input"))
        expect(() => carService.partsToBuy('2', []).to.throw("Invalid input"))

    })
    it('returns total price for valid input', () => {
        // ([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 } ...])
        // (["blowoff valve", "injectors" ...])
        expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"])).to.equal(145)
        expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "injectors", price: 115 }], ["blowoff valve", "injectors"])).to.equal(260)
        expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["injectors"])).to.equal(0)

    })
})

