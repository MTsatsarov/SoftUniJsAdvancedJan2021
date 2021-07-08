function cityTaxes(name, population, treasury) {

    return {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function collectTaxes() {
            return this.treasury += this.population * this.taxRate;
        },
        applyGrowth: function applyGrowth(percentage) {
            return this.population += this.population * percentage / 100;
        },
        applyRecession: function applyRecession(decreasePercentage) {
            return this.treasury -= this.treasury * decreasePercentage / 100;
        }
    };
}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);


console.log(city);

