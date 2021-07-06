

function sortByTwoCriteria(arr) {
    let newArr = arr.sortByTwoCriteria((a, b) => {

        if (a - b == 0) {
            return a.localeCompare(b);

        } else {

            return a - b;
        }
    })
}


console.log(sortByTwoCriteria(['alpha', 
'beta', 
'gamma']
))