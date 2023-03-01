let { expect } = require('chai')
let isOddOrEven = require('./evenOrOdd')

describe('undefined cases', () => {
    it('returns undefined for Number(input)', () => {
        expect(isOddOrEven(5)).to.be.undefined;
        expect(isOddOrEven([1, 2, 3])).to.be.undefined;
    })

    describe('even or odd cases', () => {
        it('returns even', () => {
            expect(isOddOrEven('1')).to.equal('odd')
        })
        it('returns odd', () => {
            expect(isOddOrEven('54')).to.equal('even')
        })
    })
})