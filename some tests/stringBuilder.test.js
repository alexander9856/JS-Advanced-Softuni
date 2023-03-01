let StringBuilder = require('./stringBuilder');
let { expect } = require('chai')

describe('functionality', () => {
    it('test for invalid param', () => {
        expect(() => new StringBuilder(54)).to.throw('Argument must be a string')
        expect(() => new StringBuilder({})).to.throw('Argument must be a string')
        expect(() => new StringBuilder([])).to.throw('Argument must be a string')
    })
    it('checks for undefined param', () => {
        let instance = new StringBuilder()
        expect(instance.toString()).to.equal('')

    })
    it('checks constructor for valid param', () => {
        let instance = new StringBuilder('hello')
        expect(instance.toString()).to.equal('hello')

    })
    describe('checks append Method', () => {
        it('checks with valid params', () => {
            let instance = new StringBuilder('hello')
            instance.append(', there')
            expect(instance.toString()).to.equal('hello, there')
        })
        it('checks with invalid params', () => {
            let instance = new StringBuilder('hello')

            expect(() => instance.append(54)).to.throw('Argument must be a string')
            expect(() => instance.append({})).to.throw('Argument must be a string')
            expect(() => instance.append([])).to.throw('Argument must be a string')

        })
    })
    
    describe('checks prepend Method', () => {
        it('checks prepend Method with valid params', () => {
            let instance = new StringBuilder('matata');
            instance.prepend('hakuna ');
            expect(instance.toString()).to.equal('hakuna matata')
        })
        it('checks prepend Method with invalid params', () => {
            let instance = new StringBuilder('matata');
            expect(() => instance.prepend(54)).to.throw('Argument must be a string')
            expect(() => instance.prepend([])).to.throw('Argument must be a string')
            expect(() => instance.prepend({})).to.throw('Argument must be a string')

        })
    })
    
    
    it('checks insertAt Method', () => {
        let instance = new StringBuilder('i was hiding')
        instance.insertAt(', muhahaha', 12)
        expect(instance.toString()).to.equal('i was hiding, muhahaha')
    })

    it('checks remove Method', () => {
        let instance = new StringBuilder('birra')
        instance.remove(2, 1)
        expect(instance.toString()).to.equal('bira')
    })
    it('checks toString() Method', () => {
        let str = new StringBuilder('hello');
        str.append(', there');
        str.prepend('User, ');
        str.insertAt('woop', 5);
        expect(str.toString()).to.equal('User,woop hello, there')
    })
    it('toString works correctly - 2', () => {
        const expected = '\n A \n\r B\t123   ';
        const obj = new StringBuilder();
    
        expected.split('').forEach(s => {obj.append(s); obj.prepend(s); });
    
        obj.insertAt('test', 4);
    
        obj.remove(2, 4);
    
        expect(obj.toString()).to.equal('  st21\tB \r\n A \n\n A \n\r B\t123   ');
    });

})