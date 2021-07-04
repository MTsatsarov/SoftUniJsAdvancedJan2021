function sum(myArr) {
   let firstNum = Number(myArr.shift());
   let lastNum = Number(myArr.pop());

   return firstNum+lastNum;
}

console.log(sum(['20', '30', '40']));
console.log(sum(['5', '10']));