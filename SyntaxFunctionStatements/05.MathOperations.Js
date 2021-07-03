function mathOperation(numberOne, numberTwo, operator) {
    let result = 0;
    switch (operator) {
        case "+": result = numberOne + numberTwo; break;
        case "-": result = numberOne - numberTwo; break;
        case "*": result = numberOne * numberTwo; break;
        case "/": result = numberOne / numberTwo; break;
        case "%": result = numberOne % numberTwo; break;
        case "**": result = numberOne ** numberTwo; break;
    }
    console.log(result);
}