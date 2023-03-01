let { expect } = require('chai')
let testNumbers = require('./3EXAMTestNumbers')

describe('checks sumNumber function', () => {
    it('returns for invalid input', () => {
        expect(testNumbers.sumNumbers(10, 'haha')).to.equal(undefined)
        expect(testNumbers.sumNumbers(10, [])).to.equal(undefined)
        expect(testNumbers.sumNumbers(10, {})).to.equal(undefined)

        expect(testNumbers.sumNumbers('haha', 11)).to.equal(undefined)
        expect(testNumbers.sumNumbers([], 11)).to.equal(undefined)
        expect(testNumbers.sumNumbers({}, 11)).to.equal(undefined)
    })
    it('returns for valid input', () => {
        expect(testNumbers.sumNumbers(10, 5)).to.equal('15.00')
        expect(testNumbers.sumNumbers(2, 1)).to.equal('3.00')
        expect(testNumbers.sumNumbers(-1, -2)).to.equal('-3.00')
    })
})
describe('checks numberChecker', () => {
    it('returns for invalid input', () => {
        expect(() => testNumbers.numberChecker('haha')).to.throw("The input is not a number!")
        expect(() => testNumbers.numberChecker({})).to.throw("The input is not a number!")
    })
    it('returns for valid input', () => {
        expect(testNumbers.numberChecker('1')).to.equal("The number is odd!")
        expect(testNumbers.numberChecker([])).to.equal('The number is even!')
        expect(testNumbers.numberChecker(0)).to.equal('The number is even!')
        expect(testNumbers.numberChecker('10')).to.equal('The number is even!')
        expect(testNumbers.numberChecker('15')).to.equal('The number is odd!')
    })
})
describe('checks averageSumArray function', () => {
    it('returns' , () => {
        expect(testNumbers.averageSumArray([10,15,20])).to.equal(15)
        expect(testNumbers.averageSumArray([5,5,5])).to.equal(5)
        expect(testNumbers.averageSumArray([7,7,7])).to.equal(7)

    })
})