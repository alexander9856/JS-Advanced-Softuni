class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = []
    }
    addBook(bookName, bookAuthor) {
        if (this.capacity <= 0) {
            throw new Error("Not enough space in the collection.")
        }
        else {
            this.books.push({ bookName, bookAuthor, payed: false })
            this.capacity--
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    }
    payBook(book) {
        let searchedBook = this.books.filter((x) => x.bookName === book)[0]
        if (!searchedBook) {
            throw new Error(`${book} is not in the collection.`)
        }
        else if (searchedBook.payed) {
            throw new Error(`${book} has already been paid.`)
        }
        else {
            searchedBook.payed = true
            return `${book} has been successfully paid.`
        }
    }
    removeBook(book) {
        let bookToRemove = this.books.filter((x) => x.bookName === book)[0]
        if (!bookToRemove) {
            throw new Error("The book, you're looking for, is not found.")
        }
        else if (!bookToRemove.payed) {
            throw new Error(`${book} need to be paid before removing from the collection.`)
        }
        else {
            this.books.splice(this.books.indexOf(bookToRemove), 1)
            return `${book} remove from the collection.`
        }
    }
    getStatistics(author) {
        if (!author) {
            let res = `The book collection has ${this.capacity} empty spots left.\n`
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName)).forEach((el) => res += `${el.bookName} == ${el.bookAuthor} - ${el.payed ? `Has Paid` : `Not Paid`}.\n`)
            return res.trim()
        }
        else {
            let bookWithAuthor = this.books.filter((x) => x.bookAuthor === author)[0]
            if (!bookWithAuthor) {
                throw new Error(`${author} is not in the collection.`)
            }
            else {
                return `${bookWithAuthor.bookName} == ${author} - ${bookWithAuthor.payed ? `Has Paid` : `Not Paid`}.`
            }
        }
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());

