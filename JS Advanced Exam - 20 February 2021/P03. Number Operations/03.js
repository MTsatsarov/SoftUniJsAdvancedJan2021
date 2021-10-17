const { expect, assert } = require('./node_modules/chai/chai')
const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};


describe('NumberOperationsTests', () => {
    it('expectToReturnPowerOfNum', () => {
        expect(numberOperations.powNumber(5)).to.be.equal(25)
    })

    it('assert if the input is not a num throw error', () => {
        assert.throw(() => numberOperations.numberChecker('a'), 'The input is not a number!')
    })

    it('IfNumberLowerTHan100ReturnMessa ge', () => {
        expect(numberOperations.numberChecker(79)).to.be.equal("The number is lower than 100!")
    })

    it('if Number higher than 100 return message', () => {
        expect(numberOperations.numberChecker(100)).to.be.equal('The number is greater or equal to 100!')
    })
    it('if arrays are with same length sum arr returns sum', () => {
        expect(numberOperations.sumArrays([1, 2, 3], [4, 5, 6])).to.deep.equal([5, 7, 9])
    })
    it('if 1st arr longer than sec  sum arr returns sum', () => {
        expect(numberOperations.sumArrays([1, 2, 3, 5], [4, 5, 6])).to.deep.equal([5, 7, 9, 5])
    })

    it('if 2nd arr longer than first  sum arr returns sum', () => {
        expect(numberOperations.sumArrays([1, 2, 3], [4, 5, 6, 8])).to.deep.equal([5, 7, 9, 8])
    })
})