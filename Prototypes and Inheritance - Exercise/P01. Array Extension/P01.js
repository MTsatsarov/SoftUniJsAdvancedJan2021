let myArr = [1, 2, 3];
Array.prototype.last = function () {
    return this[this.length - 1];
}
Array.prototype.skip = function (n) {
    var arr = [];
    for (let i = n; i < this.length; i++) {
        const element = this[i];
        arr.push(element)
    }
    return arr;
}
Array.prototype.take = function (n) {
    var arr = [];
    for (let i = 0; i < n; i++) {
        const element = this[i];
        arr.push(element)
    }
    return arr;
}
Array.prototype.sum = function () {
    var sum = 0;
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        sum += element;
    }
    return sum;
}

Array.prototype.average = function () {
    var sum = 0;
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        sum += element;
    }
    return sum / this.length;
}


// ⦁	last() - returns the last element of the array
// ⦁	skip(n) - returns a new array which includes all original elements, except the first n elements; n is a Number parameter
// ⦁	take(n) - returns a new array containing the first n elements from the original array; n is a Number parameter
// ⦁	sum() - returns a sum of all array elements
// ⦁	average() - returns the average of all array elements
