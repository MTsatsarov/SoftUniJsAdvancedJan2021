const { expect, assert } = require('./node_modules/chai')
const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function (booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};


describe('libraryTests', () => {
    it(' calcPerBookif the name is not string throw error', () => {
        assert.throw(() => library.calcPriceOfBook(12, 24), 'Invalid input')
    })
    it(' calcPerBookif the year is not integer throw error', () => {
        assert.throw(() => library.calcPriceOfBook('1984', 'Ivan'), 'Invalid input')
    })
    it('if year is less than 1980 return  discount', () => {
        expect(library.calcPriceOfBook('1984', 1980)).to.be.equal(`Price of 1984 is 10.00`)
    })

    it('if year is higher than 1980 return no discount', () => {
        expect(library.calcPriceOfBook('1984', 1984)).to.be.equal(`Price of 1984 is 20.00`)
    })

    it('if no books throw an error', () => {
        assert.throw(() => library.findBook([], '1984'), 'No books currently available')
    })
    it('if required book not found return message', () => {
        var books = [
            'Troy',
            'Life style',
            'Torronto'
        ]
        expect(library.findBook(books, '1984')).to.be.equal('The book you are looking for is not here!')
    })
    it('if required book  found return message', () => {
        var books = [
            'Troy',
            'Life style',
            'Torronto'
        ]
        expect(library.findBook(books, 'Troy')).to.be.equal('We found the book you want.')
    })

    it('if not number throw an error', () => {
        assert.throw(() => library.arrangeTheBooks('1984'), 'Invalid input')
    })
    it('if negative number throw an error', () => {
        assert.throw(() => library.arrangeTheBooks(-1), 'Invalid input')
    })

    it('if not space return message', () => {
        expect(library.arrangeTheBooks(1984)).to.be.equal(`Insufficient space, more shelves need to be purchased.`)
    })
    it('if enoguh space return message', () => {
        expect(library.arrangeTheBooks(40)).to.be.equal("Great job, the books are arranged.")
    })
})


// arrangeTheBooks (countBooks) - A function accept a number:
// You need to validate the input, if the countBooks is not an integer number, or is a negative number, throw an error: "Invalid input"
// The library has 5 shelves, each shelf can hold 8 books. Distribute the books on the shelves
// If all the books are arranged on the shelves, return: "Great job, the books are arranged."
// Otherwise, if no space has been reached, return: "Insufficient space, more shelves need to be purchased."
