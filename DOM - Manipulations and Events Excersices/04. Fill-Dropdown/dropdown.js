function addItem() {
    var inputText = document.getElementById('newItemText');
    var value = document.getElementById('newItemValue');

    var dropDown = document.getElementById('menu');
    var option = document.createElement('option');

    option.textContent=inputText.value;
    option.value=value.value;
    dropDown.appendChild(option);
    inputText.value='';
    value.value='';
}