
function rotate(arr, steps) {

    for (let i = 0; i < steps % arr.length; i++) {
        const element = arr.pop()
        arr.unshift(element);
    }
    return arr.join(" ");
}


console.log(rotate(['1',
    '2',
    '3',
    '4'],
    2
))


console.log(rotate(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
))