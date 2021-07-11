

function compose(arr) {
    const myObj = {};

    for (let i = 0; i < arr.length; i += 2) {
        const element = arr[i];
        myObj[element] = Number(arr[i + 1]);

    }

    return myObj;
}

console.log(compose(
    ['Yoghurt', '48', 'Rise', '138', 'Apple', '52']
))

console.log(compose(
    ['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']
))