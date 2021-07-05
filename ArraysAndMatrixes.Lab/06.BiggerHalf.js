let myArr = [3, 19, 14, 7, 2, 19, 6];

function GetBiggerHalf(myArr) {
    myArr.sort(function(a,b) {
        return a-b;
    });
    const arr = myArr.slice(myArr.length/2);
    return arr;
}
console.log(GetBiggerHalf(myArr));