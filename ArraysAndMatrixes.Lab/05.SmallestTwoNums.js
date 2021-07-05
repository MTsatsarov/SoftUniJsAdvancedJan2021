

function smallestNums (arr) {
    arr.sort(function(a,b) {
        return a-b;
    })
let arrToReturn = [arr[0],arr[1]];
    return arrToReturn.join(" ");
}

console.log(smallestNums([30, 15, 50, 5]))
console.log(smallestNums([3, 0, 10, 4, 7, 3]));