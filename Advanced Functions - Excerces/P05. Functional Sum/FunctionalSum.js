function add(a) {
    var sum = 0;
    sum += a;
    function calc(b) {
        sum +=b;
        return calc;
    }

    calc.toString = () => sum;
    return calc;
}

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());