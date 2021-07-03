function area(number) {
    let inputType = typeof (number);

    if (inputType == "number") {
        let numberToPrint = (Math.pow(number, 2) * Math.PI).toFixed(2);
        console.log(numberToPrint)
    } else {

        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }

}

area("name");