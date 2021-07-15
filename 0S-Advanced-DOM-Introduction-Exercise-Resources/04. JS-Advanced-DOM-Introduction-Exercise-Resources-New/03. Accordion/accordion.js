function toggle() {
    var btn = document.querySelector(".button");
    var result = document.getElementById("extra");
    if (result.style.display == 'none' || result.style.display=="") {
        result.style.display = "block";
        btn.textContent = "LESS"
    } else {
        result.style.display = 'none';
        btn.textContent = "MORE"
    }
}