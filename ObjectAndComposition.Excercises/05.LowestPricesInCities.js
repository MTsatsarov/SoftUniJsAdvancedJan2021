
function getLowestPrice(arr) {
    let table = [];
    while (arr.length) {
        let info = arr.shift()
        let [town, product, priceAsString] = info.split(" | ");
        let price = Number(priceAsString);
        if (table[town]== undefined) {
            table.push({ town, product, price })
        } else if (table[town].price < price) {
            table[town].price == price
        }
    }

    return table
}

console.log(getLowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
))