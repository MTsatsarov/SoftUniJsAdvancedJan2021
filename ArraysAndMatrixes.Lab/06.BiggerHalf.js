function getBiggerHalf(arr) {
   let myArr = arr.splice(0,Math.floor(arr.length/2));
   return myArr;
}

console.log(getBiggerHalf([4, 7, 2, 5]));