function calculateNeededMoney(fruit, weight, pricePerKg) {
let weightInKg = weight/1000;
var neededMoney = weightInKg * pricePerKg;
console.log (`I need $${neededMoney.toFixed(2)} to buy ${weightInKg} kilograms ${fruit}.`)
}

calculateNeededMoney('apple', 1563, 2.35)