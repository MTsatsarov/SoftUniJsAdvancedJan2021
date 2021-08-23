function create(words) {
   for (let i = 0; i < words.length; i++) {
      const element = words[i];
      var div = document.createElement('div');
      div.addEventListener('click', DisplayP)
      var p = document.createElement('p');
      p.style.display='none';
      p.textContent=`Section ${i+1}`;
      div.appendChild(p);
      var content = document.getElementById('content');
      content.appendChild(div)
   }
   function DisplayP(ev) {
      var p = ev.target.children[0].style.display = 'block';
   }
}
