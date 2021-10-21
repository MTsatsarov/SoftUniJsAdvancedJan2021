class ChristmasDinner {
    constructor(budget) {
        this.dishes = [];
        this.products = []
        this.guests = {};
        this.budget = budget
    }

    get budget() {
        return this._budget
    }
    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number")
        }
        this._budget=value
    }

    shopping([type, price]) {
        if (price > this.budget) {
            throw new Error("Not enough money to buy this product")
        }
        this.products.push(type)
        this.budget -= price

        return `You have successfully bought ${type}!`
    }
    recipes({ recipeName, productsList }) {
        if (!productsList.some(p => this.products.includes(p))) {
            throw new Error("We do not have this product")
        }
        this.dishes.push({ recipeName, productsList })
        return `${recipeName} has been successfully cooked!`
    }
    inviteGuests(name, dish) {
        var currentDish = this.dishes.find(d => d.recipeName == dish)
        if (!currentDish) {
            throw new Error("We do not have this dish")
        }
        if (this.guests.hasOwnProperty(name)) {
            throw new Error("This guest has already been invited")
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }
    showAttendance() {
        var result = [];
        Object.entries(this.guests).forEach(([guestName, dish]) => {
            result.push(`${guestName} will eat ${dish}, which consists of ${this.dishes.find(x => x.recipeName == dish).productsList.join(', ')}`)
        });


        return result.join('\n')
    }

}


let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
