function largestNumber(firstNum, secondNum, thirdNum) {

    if (firstNum > secondNum && firstNum > thirdNum) {

        console.log(`The largest number is ${firstNum}.`);
    }

    else if (secondNum > firstNum && secondNum > thirdNum) {

        console.log(`The largest number is ${secondNum}.`);
    }

    else if (thirdNum > firstNum && thirdNum > secondNum) {
        console.log(`The largest number is ${thirdNum}.`);
    }
}