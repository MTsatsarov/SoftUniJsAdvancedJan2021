function encodeAndDecodeMessages() {
    Array.from(document.querySelectorAll('button')).map(x => x.addEventListener('click', EncodeDecode))
    function EncodeDecode(ev) {
        var btn = ev.target;
        if (btn.textContent === 'Encode and send it') {
            var textAreaValue = btn.parentNode.children[1].value.split('').map(x => String.fromCharCode(x.charCodeAt(0) + 1));

            var textAreaToDisplay = Array.from(document.querySelectorAll('textarea'))[1];

            textAreaToDisplay.value = textAreaValue.join('');
            var currTextArea = document.querySelector('textarea');
            currTextArea.value='';
        }
        else {

            var textAreaToDisplay = Array.from(document.querySelectorAll('textarea'))[1].value;
            var textDecode = Array.from(textAreaToDisplay).map(x => String.fromCharCode(x.charCodeAt(0) - 1));

            Array.from(document.getElementsByTagName('textarea'))[1].value = textDecode.join('');
        }
    }
}