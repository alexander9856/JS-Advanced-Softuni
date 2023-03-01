let { expect } = require('chai')
let library = require('./3Library')

describe('check calcPriceOfBook function', () => {
    it('throws an error for invalid input', () => {
        expect(() => library.calcPriceOfBook('haha', [])).to.throw("Invalid input")
        expect(() => library.calcPriceOfBook('haha', {})).to.throw("Invalid input")
        expect(() => library.calcPriceOfBook('haha', 5.5)).to.throw("Invalid input")
        expect(() => library.calcPriceOfBook('haha', 'baba')).to.throw("Invalid input")

        expect(() => library.calcPriceOfBook([], 5)).to.throw("Invalid input")
        expect(() => library.calcPriceOfBook({}, 5)).to.throw("Invalid input")
        expect(() => library.calcPriceOfBook(6, 5)).to.throw("Invalid input")
    })
    it('returns calcPrice of book', () => {
        expect(library.calcPriceOfBook('Hari Potar', 1980)).to.equal(`Price of Hari Potar is 10.00`)
        expect(library.calcPriceOfBook('Chervenata Shapchica', 1979)).to.equal(`Price of Chervenata Shapchica is 10.00`)
        expect(library.calcPriceOfBook('Svetkavicata Mcqueen', 1981)).to.equal(`Price of Svetkavicata Mcqueen is 20.00`)
        expect(library.calcPriceOfBook('My father Pablo', 2000)).to.equal(`Price of My father Pablo is 20.00`)

    })
})
describe('check findBook function', () => {
    it('throw an error if booksArr.length == 0', () => {
        expect(() => library.findBook([], 'Hari Potar')).to.throw("No books currently available")
    })
    it('returns for desiredBook in arr or not', () => {
        expect(library.findBook(['Hari potar', 'Tapak'], 'Tapak')).to.equal("We found the book you want.")
        expect(library.findBook(['Hari potar', 'Tapak'], 'Hari potar')).to.equal("We found the book you want.")

        expect(library.findBook(['Hari potar', 'Tapak'], 'Lebedi')).to.equal("The book you are looking for is not here!")
        expect(library.findBook(['Hari potar', 'Tapak'], 'GGG')).to.equal("The book you are looking for is not here!")

    })
})
describe('check arrangeTheBooks function', () => {
    it('throws an error for invalid input', () => {
        expect(() => library.arrangeTheBooks('haha')).to.throw("Invalid input")
        expect(() => library.arrangeTheBooks([])).to.throw("Invalid input")
        expect(() => library.arrangeTheBooks({})).to.throw("Invalid input")

        expect(() => library.arrangeTheBooks(5.5)).to.throw("Invalid input")
        expect(() => library.arrangeTheBooks(-2)).to.throw("Invalid input")
    })
    it('returns for space', () => {
        expect(library.arrangeTheBooks(20)).to.equal("Great job, the books are arranged.")
        expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.")

        expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.")
        expect(library.arrangeTheBooks(50)).to.equal("Insufficient space, more shelves need to be purchased.")

    })  
})
