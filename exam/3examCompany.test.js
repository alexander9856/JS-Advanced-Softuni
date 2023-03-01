let { expect } = require('chai')
let companyAdministration = require('./3EXAMCompanyAdministration')

describe('checks hiringEmployee function', () => {
    it('throws an error for position !== Programmer', () => {
        expect(() => companyAdministration.hiringEmployee('Pesho', 'chistach', 2)).to.throw(`We are not looking for workers for this position.`)
        expect(() => companyAdministration.hiringEmployee('Pesho', 'gotvach', 5)).to.throw(`We are not looking for workers for this position.`)
    })
    it('returns for years of experience', () => {
        expect(companyAdministration.hiringEmployee('sashko', 'Programmer', 3)).to.equal(`sashko was successfully hired for the position Programmer.`)
        expect(companyAdministration.hiringEmployee('ivcho', 'Programmer', 4)).to.equal(`ivcho was successfully hired for the position Programmer.`)

        expect(companyAdministration.hiringEmployee('naruto', 'Programmer', 2)).to.equal(`naruto is not approved for this position.`)
        expect(companyAdministration.hiringEmployee('naruto', 'Programmer', 1)).to.equal(`naruto is not approved for this position.`)

    })
})
describe('checks calcucalteSalary function', () => {
    it('throws an error for invalid input', () => {
        expect(() => companyAdministration.calculateSalary('haha')).to.throw("Invalid hours")
        expect(() => companyAdministration.calculateSalary([])).to.throw("Invalid hours")
        expect(() => companyAdministration.calculateSalary({})).to.throw("Invalid hours")
        expect(() => companyAdministration.calculateSalary(-1)).to.throw("Invalid hours")
    })
    it('returns for valid input', () => {
        expect(companyAdministration.calculateSalary(50)).to.equal(750)
        expect(companyAdministration.calculateSalary(10)).to.equal(150)

        expect(companyAdministration.calculateSalary(160)).to.equal(2400)
        expect(companyAdministration.calculateSalary(161)).to.equal(3415)
        expect(companyAdministration.calculateSalary(200)).to.equal(4000)
    })
})
describe('checks firedEmployee function', () => {
    it('throws an error for invalid input', () => {
        expect(() => companyAdministration.firedEmployee(['haha', 'gaga'], 'haha')).to.throw("Invalid input")
        expect(() => companyAdministration.firedEmployee(['haha', 'gaga'], [])).to.throw("Invalid input")
        expect(() => companyAdministration.firedEmployee(['haha', 'gaga'], {})).to.throw("Invalid input")

        expect(() => companyAdministration.firedEmployee('haha', 3)).to.throw("Invalid input")
        expect(() => companyAdministration.firedEmployee({}, 3)).to.throw("Invalid input")
        expect(() => companyAdministration.firedEmployee(2, 1)).to.throw("Invalid input")

        expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3)).to.throw("Invalid input")
        expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 5)).to.throw("Invalid input")
        expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1)).to.throw("Invalid input")

    })
    it('returns for valid input', () => {
        expect(companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 1)).to.equal('Petar, George')
        expect(companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 2)).to.equal('Petar, Ivan')
        expect(companyAdministration.firedEmployee(['Petar', 'Ivan'], 1)).to.equal('Petar')


    })
})
