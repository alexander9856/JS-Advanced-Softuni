let { expect } = require('chai');
let lookupChar = require('./charLookup')

describe('look up char if valid', () => {
    it('returns undefined 1st param !== string', () => {
        expect(lookupChar(5, 6)).to.be.undefined
        expect(lookupChar([], 6)).to.be.undefined
        expect(lookupChar({}, 6)).to.be.undefined
    })
    it('returns undefined for 2nd param !== Number', () => {
        expect(lookupChar('haha', 'baba')).to.be.undefined
        expect(lookupChar('haha', {})).to.be.undefined
        expect(lookupChar('haha', [])).to.be.undefined
        expect(lookupChar('haha', 3.3)).to.be.undefined
    })
    it('returns Incorrect index for wrong 2nd value', () => {
        expect(lookupChar('haha', 4)).to.be.equal('Incorrect index')
        expect(lookupChar('haha', 5)).to.be.equal('Incorrect index')
        expect(lookupChar('dqdo', -1)).to.be.equal('Incorrect index')
    })
    it('returns character at the specified index', () =>{
        expect(lookupChar('topche', 3)).to.equal('c')
        expect(lookupChar('zarche', 0)).to.equal('z')
        expect(lookupChar('pussy', 4)).to.equal('y')
    })
})