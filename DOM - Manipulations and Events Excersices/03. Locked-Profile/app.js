function lockedProfile() {
    var btns = Array.from(document.querySelectorAll('button'));
    btns.map(x => x.addEventListener('click', ShowMore))

    function ShowMore(ev) {
        if (ev.target.textContent == 'Show more') {

            const isLocked = document.querySelector('input[type=radio]:checked').value === 'lock';
            if (isLocked) {
                return;
            }
            var divToShow = ev.target.parentNode.children[9];
            divToShow.style.display = 'block';
            ev.target.textContent = 'Hide it'
        } else {
            const isLocked = document.querySelector('input[type=radio]:checked').value === 'lock';
            if (isLocked) {
                return;
            }

            var divToShow = ev.target.parentNode.children[9];
            divToShow.style.display = 'none';
            ev.target.textContent = 'Show more';
        }
    }
}
