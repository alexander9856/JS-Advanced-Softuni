let { expect } = require('chai')
let createCalculator = require('./addOrSubtract')

describe('Summator', () => {
    let instance = null;

    beforeEach(() => {
        instance = createCalculator();
    });

    it('has all methods', () => {
        expect(instance).to.has.ownProperty('add')
        expect(instance).to.has.ownProperty('subtract')
        expect(instance).to.has.ownProperty('get')
    });

    it('adds single number', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1)
    })
    it('adds multiple numbers', () => {
        instance.add(1);
        instance.add(3);
        expect(instance.get()).to.equal(4)
    })



    it('subtracts single number', () => {
        instance.subtract(1);
        expect(instance.get()).to.equal(-1)
    })
    it('adds multiple numbers', () => {
        instance.subtract(1);
        instance.subtract(3);
        expect(instance.get()).to.equal(-4)
    })


    it('sums and subtracts at the same time', () => {
        instance.add(5);
        instance.subtract(3)
        expect(instance.get()).to.equal(2)
    })

    it('sums and subtracts at the same time with string numbers', () => {
        instance.add('5');
        instance.subtract('3')
        expect(instance.get()).to.equal(2)
    })
})