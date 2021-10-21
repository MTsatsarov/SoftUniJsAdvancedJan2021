const { describe } = require('./node_modules/mocha/mocha')
const { assert, expect } = require('./node_modules/chai/chai.js')
let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}


describe('Dealership Tests', () => {
    it('If return old car gets discount', () => {
        expect(dealership.newCarCost('Audi A4 B8', 20000)).to.be.equal(5000)
    })

    it('If not return old car dont gets discount', () => {
        expect(dealership.newCarCost('Gadna shkoda', 20000)).to.be.equal(20000)
    })

    it('Car equipment returns required extras', () => {
        var extras = ["heated seats", "sliding roof", "sport rims", "navigation"]
        expect(dealership.carEquipment(extras, [0, 1])).to.be.deep.equal(["heated seats", "sliding roof"])
    })
    it('If category less than 4 return message with no discount', () => {
        var extras = ["heated seats", "sliding roof", "sport rims", "navigation"]
        expect(dealership.euroCategory(3)).to.be.equal('Your euro category is low, so there is no discount from the final price!')
    })
    it('If category is 4 or higher returns discount and message', () => {
        var extras = ["heated seats", "sliding roof", "sport rims", "navigation"]
        expect(dealership.euroCategory(4)).to.be.equal(`We have added 5% discount to the final price: ${15000 - (15000*0.05)}.`)
    })
})



// euroCategory(category) - A function that accepts a single parameter (number):
// the function checks the ecology of your new car
// then the function returns a message regarding the final price you will have to pay, depending on your car eco category
