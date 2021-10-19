const { expect, assert } = require('./node_modules/chai/chai')
const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

describe('TestNumbesTests', () => {
    it('ifFirstInputNotNum', () => {
        expect(testNumbers.sumNumbers('a', 1)).to.be.equal(undefined)
    })
    it('IfSecInputNotNum', () => {
        expect(testNumbers.sumNumbers(1, 'c')).to.be.equal(undefined)
    })
    it('returnSumToSecondDigitRouned', () => {
        expect(testNumbers.sumNumbers(1, 2.352)).to.be.equal("3.35")
    })
    it('returnSumOfNegativeNumbers', () => {
        expect(testNumbers.sumNumbers(-1, 2.352)).to.be.equal("1.35")
    })
    it('returnSumOfNegativeNumbers', () => {
        expect(testNumbers.sumNumbers(-1, -2.352)).to.be.equal("-3.35")
    })

    it('throwErrorIfNotNUm', () => {
        assert.throw(() => testNumbers.numberChecker('a'), 'The input is not a number!')
    })

    it('returnEvenIfNumIsEvent', () => {
        expect(testNumbers.numberChecker(2)).to.be.equal("The number is even!")
    })

    it('returnOddIfOdd', () => {
        expect(testNumbers.numberChecker(1)).to.be.equal("The number is odd!")
    })

    it('returnAverageSum', () => {
        expect(testNumbers.averageSumArray([1,2,3])).to.be.equal(2)
    })

})



// averageSumArray(arr) - A function that accept single parameter (array):
// the function iterates through each element in the array, calculates the sum, and returns the average sum
// The array will be always valid, there is no need to test the input arrays. 

