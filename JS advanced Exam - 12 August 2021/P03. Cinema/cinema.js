const { expect,assert } = require('./node_modules/chai')
const cinema = {
    showMovies: function (movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
         
            return result;
        }

    },
    ticketPrice: function (projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function (firstPlace, secondPlace) {
        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 ||
            firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};


describe('Cinema tests', () => {
    it('IfNoMoviesReturnMessage', () => {
        expect(cinema.showMovies([])
        ).to.be.equal('There are currently no movies to show.')
    })
    it('IfMoviesReturnArr', () => {
        expect(cinema.showMovies(["King Kong", "The Tomorrow War", "Joker"])
        ).to.be.equal("King Kong, The Tomorrow War, Joker")
    })

    it('ifProjectionPresentsReturnprice', () => {
        expect(cinema.ticketPrice('Premiere')
        ).to.be.equal(12)
    })

    it('ifNoTypeThrowError', () => {
        assert.throw(() =>cinema.ticketPrice('premiere'), 'Invalid projection type.');
    })
    it('ifFirstNumHigherTHanRange', () => {
        expect(cinema.swapSeatsInHall(50,6)
        ).to.be.equal("Unsuccessful change of seats in the hall.")
    })
    it('ifSecNumHigherTHanRange', () => {
        expect(cinema.swapSeatsInHall(2,842)
        ).to.be.equal("Unsuccessful change of seats in the hall.")
    })

    it('ifFIrstNumNotInteger', () => {
        expect(cinema.swapSeatsInHall("2",842)
        ).to.be.equal("Unsuccessful change of seats in the hall.")
    })
    it('ifSecondNumNotInteger', () => {
        expect(cinema.swapSeatsInHall(2,"842")
        ).to.be.equal("Unsuccessful change of seats in the hall.")
    })
    it('ifNoFirstSeat', () => {
        expect(cinema.swapSeatsInHall(undefined,12)
        ).to.be.equal("Unsuccessful change of seats in the hall.")
    })
    it('ifSecNumNotExists', () => {
        expect(cinema.swapSeatsInHall(19,undefined)
        ).to.be.equal("Unsuccessful change of seats in the hall.")
    })
    it('ifFirstNumLessThan1', () => {
        expect(cinema.swapSeatsInHall(0,1)
        ).to.be.equal("Unsuccessful change of seats in the hall.")
    })
    it('ifSecNUmLessThan1', () => {
        expect(cinema.swapSeatsInHall(1,0)
        ).to.be.equal("Unsuccessful change of seats in the hall.")
    })
    it('ifFirstNUmLEssThan0', () => {
        expect(cinema.swapSeatsInHall(-1,2)
        ).to.be.equal("Unsuccessful change of seats in the hall.")
    })
    it('ifSecNUmLessThan0', () => {
        expect(cinema.swapSeatsInHall(1,-2)
        ).to.be.equal("Unsuccessful change of seats in the hall.")
    })

    it('ifFirstNUmLEssThan0', () => {
        expect(cinema.swapSeatsInHall(13,7)
        ).to.be.equal("Successful change of seats in the hall.")
    })
    it('ifOnlyOneNUmSent', () => {
        expect(cinema.swapSeatsInHall(2)
        ).to.be.equal("Unsuccessful change of seats in the hall.")
    })
})


// swapSeatsInHall(firstPlace, secondPlace)- A function that accepts two numbers
// The function swaps the seat number in the cinema hall, when two numbers are submitted.
// The exchange is not successful and the function returns "Unsuccessful change of seats in the hall." :
// If one of the two numbers do not exist
// The numbers are not integers
// If one of the numbers is greater than the capacity of the hall – 20
// Seats are less or equal of 0
// Otherwise return: "Successful change of seats in the hall."
// There is a need for validation for the input
