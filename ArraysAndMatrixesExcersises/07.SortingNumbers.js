
function sortNums(arr) {
     arr.sort((a,b) => a-b)
     var newArr =[];

     while (arr.length) {
         newArr.push(arr.shift())
         newArr.push(arr.pop())
     }
    return newArr
}


console.log(sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))