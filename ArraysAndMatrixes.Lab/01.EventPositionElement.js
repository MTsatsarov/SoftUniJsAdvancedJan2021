
function getEventElement(myArr) {
let result = [];
    for (let i = 0; i < myArr.length; i+=2) {
        const element = Number(myArr[i]);
        result.push(element);
    }
    return result.join(" ");
}

console.log(getEventElement(['20', '30', '40', '50', '60']));

console.log(getEventElement(['5', '10']));