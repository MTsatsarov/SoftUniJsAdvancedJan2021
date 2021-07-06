

function addOrRemove(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === 'add') {
            newArr.push(i+1);
        } else {
            newArr.pop()
        }
        
    }
    if (newArr.length>0) {
        return newArr.join("\n");  
    } else {
        return "Empty"
    }
    
}

console.log(addOrRemove(['add', 
'add', 
'add', 
'add']
))
console.log("-".repeat(100))
console.log(addOrRemove(['add', 
'add', 
'remove', 
'add', 
'add']
));
console.log("-".repeat(100))

console.log(addOrRemove(['remove', 
'remove', 
'remove']
))