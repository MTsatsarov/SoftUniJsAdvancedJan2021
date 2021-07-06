

function pirntNthElement(arr,element) {
let newArr = [];
    for (let i = 0; i < arr.length; i+=element) {
        newArr.push(arr[i]);
        
    }
    return newArr;
}


console.log( pirntNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
6
));

console.log(pirntNthElement(['dsa',
'asd', 
'test', 
'tset'], 
2
));
