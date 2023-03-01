let { expect } = require('chai')
let mathEnforcer = require('./mathEnforcer')

describe('func addFive', () => {
    it('returns undefined for param !== Number', () => {
        expect(mathEnforcer.addFive('baba')).to.be.undefined
        expect(mathEnforcer.addFive([])).to.be.undefined
        expect(mathEnforcer.addFive({})).to.be.undefined

    })
    it('returns (result + 5) if valid param', () => {
        expect(mathEnforcer.addFive(5)).to.equal(10)
        expect(mathEnforcer.addFive(-10)).to.equal(-5)
        expect(mathEnforcer.addFive(5.5)).to.equal(5.5 + 5)
    })
})
describe('func subtractTen', () => {
    it('returns undefined for param !== Number', () => {
        expect(mathEnforcer.subtractTen('dqdo')).to.be.undefined
        expect(mathEnforcer.subtractTen([])).to.be.undefined
        expect(mathEnforcer.subtractTen({})).to.be.undefined

    })
    it('returns (result - 10) if valid param', () => {
        expect(mathEnforcer.subtractTen(25)).to.equal(15)
    })
    it('returns (result - 10) if valid param', () => {
        expect(mathEnforcer.subtractTen(-30)).to.equal(-40)
        expect(mathEnforcer.subtractTen(20.5)).to.equal(20.5 - 10)
    })
})
describe('func sum', () => {
    it('returns undefined for 1st invalid param', () => {
        expect(mathEnforcer.sum('baba', 5)).to.be.undefined
        expect(mathEnforcer.sum([], 5)).to.be.undefined
        expect(mathEnforcer.sum({}, 5)).to.be.undefined

    })
    it('returns undefined for 2nd invalid param', () => {
        expect(mathEnforcer.sum(6, 'dqdo')).to.be.undefined
        expect(mathEnforcer.sum(6, [])).to.be.undefined
        expect(mathEnforcer.sum(6, {})).to.be.undefined
    })
    it('returns result for both valid params', () => {
        expect(mathEnforcer.sum(50, 19)).to.equal(69)
        expect(mathEnforcer.sum(20, -8)).to.equal(12)
        expect(mathEnforcer.sum(-20, -8)).to.equal(-28)
        expect(mathEnforcer.sum(5.5, 4.4)).to.equal(5.5 + 4.4)
    })
})