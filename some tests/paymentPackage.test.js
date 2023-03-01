let { expect } = require('chai');
let PaymentPackage = require('./paymentPackage')

describe('functionality', () => {
    it('constructor', () => {
        let instance = new PaymentPackage('Name', 100);
        expect(instance._name).to.equal('Name');
        expect(instance._value).to.equal(100);
        expect(instance._VAT).to.equal(20);
        expect(instance._active).to.equal(true)
    });

    it('tests for the name', () => {
        let instance = new PaymentPackage('Haha', 40);
        expect(instance.name).to.equal('Haha')

        instance.name = 'baba'
        expect(instance.name).to.equal('baba')


        expect(() => new PaymentPackage(123, 123)).to.throw('Name must be a non-empty string')
        expect(() => new PaymentPackage([], 123)).to.throw('Name must be a non-empty string')
        expect(() => new PaymentPackage({}, 123)).to.throw('Name must be a non-empty string')

        expect(() => new PaymentPackage('', 123)).to.throw('Name must be a non-empty string')

        expect(() => new PaymentPackage('baba', 123)).not.to.throw('Name must be a non-empty string')


    })

    it('tests for the value', () => {
        let instance = new PaymentPackage('abv', 20);
        expect(instance.value).to.equal(20);

        instance.value = 30
        expect(instance.value).to.equal(30)


        expect(() => new PaymentPackage('hrana', 'bira')).to.throw('Value must be a non-negative number')
        expect(() => new PaymentPackage('hrana', [])).to.throw('Value must be a non-negative number')
        expect(() => new PaymentPackage('hrana', {})).to.throw('Value must be a non-negative number')

        expect(() => new PaymentPackage('hrana', -1)).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('hrana', 0)).not.to.throw('Value must be a non-negative number')

        expect(() => new PaymentPackage('hrana', 123)).not.to.throw('Value must be a non-negative number')

    })

    it('tests for the VAT', () => {
        let instance = new PaymentPackage('abv', 20);
        expect(instance.VAT).to.equal(20)
        expect(() => instance.VAT = 'haha').to.throw('VAT must be a non-negative number')
        expect(() => instance.VAT = []).to.throw('VAT must be a non-negative number')
        expect(() => instance.VAT = {}).to.throw('VAT must be a non-negative number')
        expect(() => instance.VAT = -1).to.throw('VAT must be a non-negative number')
        // expect(() => instance.VAT = 0).not.to.throw('VAT must be a non-negative number')
        expect(() => instance.VAT = 25).not.to.throw('VAT must be a non-negative number')


    })

    it('tests for active', () => {
        let instance = new PaymentPackage('toqga', 20);
        expect(instance.active).to.be.true;

        instance.active = false
        expect(instance._active).to.be.false;
        expect(instance.active).to.be.false;

        expect(() => instance.active = 'makaroni').to.throw('Active status must be a boolean')
        expect(() => instance.active = []).to.throw('Active status must be a boolean')
        expect(() => instance.active = {}).to.throw('Active status must be a boolean')

        expect(() => instance.active = -1).to.throw('Active status must be a boolean')
        expect(() => instance.active = 1).to.throw('Active status must be a boolean')


        expect(() => instance.active = true).not.to.throw('Active status must be a boolean')

    })


})
describe('tests for toString() Method', () => {
    it('tests for toString() with active = true', () => {
        let instance = new PaymentPackage('corona', 50)
        function test(instance) {
            const output = [
                `Package: ${instance.name}` + (instance.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${instance.value}`,
                `- Value (VAT ${instance.VAT}%): ${instance.value * (1 + instance.VAT / 100)}`
            ];
            return output.join('\n');
        }
        expect(instance.toString()).to.equal(test(instance))
    })
    it('tests for toString() with active = false', () => {
        let instance = new PaymentPackage('corona', 50)
        instance.active = false
        function test(instance) {
            const output = [
                `Package: ${instance.name}` + (instance.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${instance.value}`,
                `- Value (VAT ${instance.VAT}%): ${instance.value * (1 + instance.VAT / 100)}`
            ];
            return output.join('\n');
        }
        expect(instance.toString()).to.equal(test(instance))
    })
})
