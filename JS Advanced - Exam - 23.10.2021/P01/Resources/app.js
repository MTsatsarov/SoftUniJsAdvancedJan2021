window.addEventListener('load', solve);

function solve() {
    var form = document.querySelector('form');
    var formInputs = Array.from(document.querySelectorAll('form input'));
    form.addEventListener('click', addSongToCollection)
    var collectionOfSongsDiv = document.querySelector('.all-hits-container')
    var likesParagraph = document.querySelector('.likes p')
    var savedSongsDiv = document.querySelector('.saved-container')
    var totalLikes = 0;

    collectionOfSongsDiv.addEventListener("click", doSmth)
    function addSongToCollection(ev) {
        ev.preventDefault();
        if (ev.target.tagName == 'BUTTON') {
            if (formInputs.some(x => x.value == '')) {
                return;
            }
            var genre = formInputs[0].value
            var name = formInputs[1].value
            var author = formInputs[2].value
            var date = formInputs[3].value

            var songDiv = document.createElement('div');
            songDiv.classList.add('hits-info');
            var img = document.createElement('img')
            img.src = './static/img/img.png';
            songDiv.appendChild(img)
            var genreH2 = document.createElement('h2')
            genreH2.textContent = `Genre: ${genre}`
            songDiv.appendChild(genreH2)

            var nameh2 = document.createElement('h2')
            nameh2.textContent = `Name: ${name}`;
            songDiv.appendChild(nameh2)

            var authorH2 = document.createElement('h2')
            authorH2.textContent = `Author: ${author}`
            songDiv.appendChild(authorH2)

            var dateh3 = document.createElement('h3')
            dateh3.textContent = `Date: ${date}`
            songDiv.appendChild(dateh3)

            var saveBtn = document.createElement('button')
            saveBtn.classList.add('save-btn')
            saveBtn.textContent = 'Save song'
            songDiv.appendChild(saveBtn)

            var likeBtn = document.createElement('button')
            likeBtn.classList.add('like-btn');
            likeBtn.textContent = 'Like song'
            songDiv.appendChild(likeBtn)

            var delBtn = document.createElement('button')
            delBtn.classList.add('delete-btn')
            delBtn.textContent = 'Delete'
            songDiv.appendChild(delBtn)
            delBtn.addEventListener('click', (ev) => {
                var song = ev.target.parentNode;
                ev.target.parentNode.parentNode.removeChild(song)
            })

            formInputs.forEach(x => x.value = '')
            collectionOfSongsDiv.appendChild(songDiv)
        }
    }

    function doSmth(ev) {
        if (ev.target.tagName != 'BUTTON') {
            return;
        }
        if (ev.target.classList.contains('like-btn')) {
            totalLikes++;
            likesParagraph.textContent = `Total Likes: ${totalLikes}`
            ev.target.disabled = true
        }
        if (ev.target.classList.contains('save-btn')) {
            var song = ev.target.parentNode;
            song.parentNode.removeChild(song)
            savedSongsDiv.appendChild(song)
            var btn = song.querySelector('.save-btn');
            var likeBtn = song.querySelector('.like-btn')
            song.removeChild(likeBtn)
            song.removeChild(btn)
        }
    }
}