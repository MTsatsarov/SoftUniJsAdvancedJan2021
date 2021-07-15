function subtract() {

    var firstNum = Number(document.getElementById("firstNumber").value);
    var secondNumber = Number(document.getElementById("secondNumber").value);

    let result = document.getElementById("result");
    result.textContent = firstNum - secondNumber;
}