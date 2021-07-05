

function getOddPositions(arr) {
    const myArr=[];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !=0) {
            const currElement = arr[i] * 2;
            myArr.push(currElement);
        }
   
    }
    return myArr.reverse().join(" ");
}

console.log(getOddPositions([10, 15, 20, 25]))
console.log(getOddPositions([3, 0, 10, 4, 7, 3]))