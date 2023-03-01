let { expect } = require('chai')
let cinema = require('./3EXAMCinema')

describe('checks showMovies function', () => {
    it('returns for length == 0 && other', () => {
        expect(cinema.showMovies([])).to.equal("There are currently no movies to show.")
        expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal(`King Kong, The Tomorrow War, Joker`)
        expect(cinema.showMovies(['Bebe beglec'])).to.equal('Bebe beglec')
    })
})
describe('checks ticketPrice function', () => {
    it('returns for valid input', () => {
        expect(cinema.ticketPrice('Premiere')).to.equal(12.00)
        expect(cinema.ticketPrice('Normal')).to.equal(7.50)
        expect(cinema.ticketPrice('Discount')).to.equal(5.50)
    })
    it('throws an error for invalid input', () => {
        expect(() => cinema.ticketPrice('haha')).to.throw("Invalid projection type.")
        expect(() => cinema.ticketPrice('shishi')).to.throw("Invalid projection type.")
        expect(() => cinema.ticketPrice('mishi')).to.throw("Invalid projection type.")
    })
})
describe('checks swapSeatsInHall function', () => {
    it('checks for invalid input', () => {
        expect(cinema.swapSeatsInHall(20)).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(20.5, 10.5)).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(21, 15)).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(15, 100)).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(0, 15)).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(15, 0)).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(-1, 15)).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(15, -1)).to.equal("Unsuccessful change of seats in the hall.")
    })
    it('returns for valid input', () => {
        expect(cinema.swapSeatsInHall(15,16)).to.equal("Successful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(1,20)).to.equal("Successful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(20,5)).to.equal("Successful change of seats in the hall.")
    })
})