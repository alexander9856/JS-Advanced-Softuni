let { expect } = require('chai')
let bookSelection = require('./3ExambookSelection')

describe('checks isGenreSuitable function', () => {
    it('returns for thriller or horror genre', () => {
        expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`)
        expect(bookSelection.isGenreSuitable('Thriller', 10)).to.equal(`Books with Thriller genre are not suitable for kids at 10 age`)
        expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`)
        expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal(`Books with Horror genre are not suitable for kids at 10 age`)
    })
    it('returns suitable for other input genres', () => {
        expect(bookSelection.isGenreSuitable('Hari Potar', 15)).to.equal('Those books are suitable')
        expect(bookSelection.isGenreSuitable('Mecho puh', 12)).to.equal('Those books are suitable')
        expect(bookSelection.isGenreSuitable('Aladin', 10)).to.equal('Those books are suitable')

    })
})

describe('checks isItAffordable function', () => {
    it('throw an error for invalid input', () => {
        expect(() => bookSelection.isItAffordable('1', 300).to.throw("Invalid input"))
        expect(() => bookSelection.isItAffordable([], 300).to.throw("Invalid input"))
        expect(() => bookSelection.isItAffordable({}, 300).to.throw("Invalid input"))

        expect(() => bookSelection.isItAffordable(300, '1').to.throw("Invalid input"))
        expect(() => bookSelection.isItAffordable(200, {}).to.throw("Invalid input"))
        expect(() => bookSelection.isItAffordable(100, []).to.throw("Invalid input"))
    })
    it('checks if i have enough money to buy this', () => {
        expect(bookSelection.isItAffordable(15, 15)).to.equal(`Book bought. You have 0$ left`)
        expect(bookSelection.isItAffordable(15, 16)).to.equal(`Book bought. You have 1$ left`)

        expect(bookSelection.isItAffordable(15, 10)).to.equal(`You don't have enough money`)
        expect(bookSelection.isItAffordable(15, 14)).to.equal(`You don't have enough money`)


    })
})

describe('checks suitableTitles function', () => {
    it('throw an error for  invalid input', () => {
        expect(() => bookSelection.suitableTitles([], 1).to.throw("Invalid input"))
        expect(() => bookSelection.suitableTitles([], {}).to.throw("Invalid input"))
        expect(() => bookSelection.suitableTitles([], []).to.throw("Invalid input"))

        expect(() => bookSelection.suitableTitles({}, 'haha').to.throw("Invalid input"))
        expect(() => bookSelection.suitableTitles(1, 'baba').to.throw("Invalid input"))
        expect(() => bookSelection.suitableTitles('baba', 'dedo').to.throw("Invalid input"))
    })
    it('return array with wanted genre', () => {
        expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller')).to.deep.equal([ 'The Da Vinci Code' ])
        expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Pikachu')).to.deep.equal([])
        expect(bookSelection.suitableTitles([{ title: "Batman", genre: "Comedy" }], 'Comedy')).to.deep.equal([ 'Batman' ])

    })
})