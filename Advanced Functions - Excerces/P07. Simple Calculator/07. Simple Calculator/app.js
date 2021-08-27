function calculator() {
    var numOne;
    var numTwo;
    var result;
    function init(selector1, selector2, selector3) {
        numOne = document.querySelector(selector1);
        numTwo = document.querySelector(selector2);
        result = document.querySelector(selector3);
    }
    function add() {
        result.value = Number(numOne.value) + Number(numTwo.value);
    }
    function subtract() {
        result.value = Number(numOne.value) - Number(numTwo.value);
    }

    return {
        init,
        add,
        subtract,
    }
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');





