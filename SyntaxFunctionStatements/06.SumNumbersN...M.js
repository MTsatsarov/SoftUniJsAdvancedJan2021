function sumNums(n, m) {
    let numOne = Number(n);
    let numTwo = Number(m);
    var result = 0;
    for (let index = numOne; index <= numTwo; index++) {
        result += index;
    }
    console.log(result);
}