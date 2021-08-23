function attachEventsListeners() {

    var btns = Array.from(document.querySelectorAll('button'));

    for (let i = 0; i < btns.length; i++) {
        const element = btns[i];
        element.addEventListener('click', GetValue)
    }

    function GetValue(ev) {
        var inputField = ev.target.parentNode.children[1];
        var value = inputField.value;
        if (inputField.inputField=='days') {
            var inputs = document.querys
        }
    }
}