const { describe } = require('./node_modules/mocha/mocha')
const { expect, assert } = require('./node_modules/chai/chai')
let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}


describe('pizzUniTests', () => {
    it('Throw error if no pizza', () => {
        var obj = {
            orderedDrink: 'drink'
        }
        assert.throw(() => pizzUni.makeAnOrder(obj), 'You must order at least 1 Pizza to finish the order.');
    })

    it('If only pizza is ordered return message', () => {
        var obj = {
            orderedPizza: 'Pizzoni',
        }
        expect(pizzUni.makeAnOrder(obj)).to.equal(`You just ordered ${obj.orderedPizza}`);
    })

    it('If  pizza and drink is ordered return message', () => {
        var obj = {
            orderedPizza: 'Pizzoni',
            orderedDrink: 'drink'
        }
        expect(pizzUni.makeAnOrder(obj)).to.equal(`You just ordered ${obj.orderedPizza} and ${obj.orderedDrink }.`);
    })

    it('If pizza is still preparing return message', () => {
        var obj = [{
            pizzaName: 'Pizzoni',
            status:'preparing'
        }]
        expect(pizzUni.getRemainingWork(obj)).to.equal(`The following pizzas are still preparing: ${'Pizzoni'}.`);
    })

    it('If pizza is ready return message', () => {
        var obj = [{
            pizzaName: 'Pizzoni',
            status:'ready'
        }]
        expect(pizzUni.getRemainingWork(obj)).to.equal(`All orders are complete!`);
    })

    it('If type is Carry out make 10% discount', () => {

        expect(pizzUni.orderType(1,'Carry Out')).to.equal(0.9);
    })
    it('If type is Delivery do not make 10% discount and return price', () => {

        expect(pizzUni.orderType(1,'Delivery')).to.equal(1);
    })
})


// orderType(totalSum, typeOfOrder) - A function that accepts two parameters (number, string):
// the function first checks what is the type of the order (‘Carry Out’ , ‘Delivery’)
// if the type of the order is ‘Carry Out’ you get 10% discount
// then the function returns the total sum of the order
