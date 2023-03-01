let { expect } = require('chai')
let numberOperations = require('./3EXAMNumberOp')

describe('checks powNumber func', () => {
    it('works', () => {
        expect(numberOperations.powNumber(2)).to.equal(4)
        expect(numberOperations.powNumber(0)).to.equal(0)
        expect(numberOperations.powNumber(1)).to.equal(1)
    })
})
describe('checks numberChecker func', () => {
    it('throws an error for invalid input', () => {
        expect(() => numberOperations.numberChecker('haha')).to.throw()
        expect(() => numberOperations.numberChecker({})).to.throw()
    })
    it('works with valid input', () => {
        expect(numberOperations.numberChecker('5')).to.equal("The number is lower than 100!")
        expect(numberOperations.numberChecker('101')).to.equal("The number is greater or equal to 100!")
        expect(numberOperations.numberChecker('100')).to.equal("The number is greater or equal to 100!")
        expect(numberOperations.numberChecker([])).to.equal("The number is lower than 100!")
    })
})
describe('checks •	sumArrays func', () => {
    it('works with valid input', () => {
        expect(numberOperations.sumArrays([5, 10, 15], [2, 3, 5])).to.deep.equal([ 7, 13, 20 ])
        expect(numberOperations.sumArrays([0,1], [2, 3, 5])).to.deep.equal([ 2, 4, 5 ])

    })
})
