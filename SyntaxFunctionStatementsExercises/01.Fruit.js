function calculateNeededMoney(fruit, weight, pricePerKg) {
let weightInKg = (weight/1000).toFixed(2);
var neededMoney = (weightInKg * pricePerKg).toFixed(2);
console.log (`I need $${neededMoney} to buy ${weightInKg} kilograms ${fruit}.`)
}

calculateNeededMoney('apple', 1563, 2.35)
calculateNeededMoney('krushi', 1222, 2.15)