

function sortByTwoCriteria(...arr) {
    let newArr = arr.sort((a, b) => {

        if (a - b == 0) {
            return a.localeCompare(b);

        } else {

            return a - b;
        }
    })

    return newArr;
}


console.log(sortByTwoCriteria(['alpha',
    'beta',
    'gamma']
))