
function listOfNames(arr) {
        let result  = arr.sort((a, b) => a.localeCompare(b)).map((name,index) => {
            let result =`${index+1}.${name}`;
            return result;
        });
return result.join("\n");
     
    }


console.log(listOfNames(["John", "Bob", "Christina", "Ema"]))