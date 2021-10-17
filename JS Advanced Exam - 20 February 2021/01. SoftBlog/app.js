function solve() {
   document.querySelector('form').addEventListener('submit', CreatePost)
   let titleArr = [];
   function CreatePost(ev) {
 
      ev.preventDefault();
      var creator = document.getElementById('creator').value
      var title = document.getElementById('title').value;
      var content = document.getElementById('content').value
      var category = document.getElementById('category').value
      var area = document.querySelector('main>section');
      createPostHtml();
      function createPostHtml() {
         const article = document.createElement('article');
         var h1 = document.createElement('h1');
         h1.textContent = title;
         article.appendChild(h1);

         var categoryP = document.createElement('p');
         categoryP.textContent = 'Category: '
         var categoryStrong = document.createElement('strong');
         categoryStrong.textContent = category;
         categoryP.appendChild(categoryStrong)
         article.appendChild(categoryP);

         var creatorP = document.createElement('p');
         creatorP.textContent = 'Creator: '
         var creatorStrong = document.createElement('strong');
         creatorStrong.textContent = creator;
         creatorP.appendChild(creatorStrong)
         article.appendChild(creatorP);

         var contentP = document.createElement('p');
         contentP.textContent = content;
         article.appendChild(contentP);

         var buttonsDiv = document.createElement('div');
         buttonsDiv.classList.add('buttons')

         var deleteBtn = document.createElement('button');
         deleteBtn.className = 'btn delete'
         deleteBtn.textContent = 'Delete'
         deleteBtn.addEventListener('click', DeleteArticle)
         buttonsDiv.appendChild(deleteBtn)

         var archiveBtn = document.createElement('button');
         archiveBtn.className = 'btn archive'
         archiveBtn.textContent = 'Archive'

         archiveBtn.addEventListener('click', MoveToArhchive)
         buttonsDiv.appendChild(archiveBtn)

         article.appendChild(buttonsDiv)
         area.appendChild(article)
         function DeleteArticle(ev) {
            ev.target.parentNode.parentNode.remove()
         }

         function MoveToArhchive(ev) {
            titleArr.push(h1.textContent)
            var ol = document.querySelector('ol')
            ol.innerHTML='';
            titleArr.sort((a,b) => a.localeCompare(b));
            console.log(titleArr)
            ev.target.parentNode.parentNode.remove();
            for (let i = 0; i < titleArr.length; i++) {
               const element = titleArr[i];
               var li = document.createElement("li");
               li.textContent = element;
               ol.appendChild(li)
            }

         }

      }
   }
}


