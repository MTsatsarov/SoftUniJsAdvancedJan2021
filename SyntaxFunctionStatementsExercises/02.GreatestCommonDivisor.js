function getGreatestCommonDivisor(firstNumber, secondNumber) {
    while (secondNumber !== 0) {
        temp = secondNumber;
        secondNumber = firstNumber % secondNumber;
        firstNumber = temp;
    }
    return firstNumber;
}

getGreatestCommonDivisor(2154, 458);