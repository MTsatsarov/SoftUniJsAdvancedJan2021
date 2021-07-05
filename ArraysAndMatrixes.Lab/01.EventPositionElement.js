
function getEventElement(myArr) {
let result = [];
    for (let i = 0; i < myArr.length; i++) {
        if (i%2==0) {
            const element = myArr[i];
            result.push(element);  
        }
        
    }
    return result.join(" ");
}

console.log(getEventElement(['20', '30', '40', '50', '60']));

console.log(getEventElement(['5', '10']));