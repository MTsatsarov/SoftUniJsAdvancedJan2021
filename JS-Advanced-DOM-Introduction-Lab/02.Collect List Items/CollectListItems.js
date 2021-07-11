function extractText() {
    let elements = document.getElementsByTagName("li");
    let text = [...elements].map(e=>e.textContent);
    let placeToPut = document.getElementById("result");
    placeToPut.value = text.join("\n");
}