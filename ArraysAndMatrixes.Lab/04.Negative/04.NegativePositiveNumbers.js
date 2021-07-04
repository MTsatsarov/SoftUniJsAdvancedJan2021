function sort(arr) {
    const result = [];
    for (let num of arr) {
        if (num < 0) {
            result.unshift(num)
        } else {
            result.push(num);
        }
    }

    for (let num of result) {
        console.log(num);
    }
}

sort([7, -2, 8, 9])
sort([3, -2, 0, -1]);