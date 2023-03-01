let { expect } = require('chai')
let { isSymmetric } = require('./checkForSymmetry')

describe('Symmetry checking', () => {
    it('returs true for symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    })
    it('returns false for non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false
    })
    it('returns false for non-array', () => {
        expect(isSymmetric(5)).to.be.false
    })
    it('returns false for type different ', () => {
        expect(isSymmetric([1, 2, 2, "1"])).to.be.false
    })
    //test overloading
    it('returs true for symmetric odd elements', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    })
    it('returns true for symmetric array of strings', () => {
        expect(isSymmetric(['baba', 'haha', 'haha', 'baba'])).to.be.true
    })
    it('returns false for symmetric array of strings', () => {
        expect(isSymmetric(['baba', 'haha', 'qice'])).to.be.false
    })
    it('returns false for string param', () => {
        expect(isSymmetric('baba')).to.be.false
    })

})