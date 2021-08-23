function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      var tbody = [...document.querySelectorAll('tbody tr')];
      let input = document.querySelector('#searchField').value;
      for (let i = 0; i < tbody.length; i++) {
         var element = tbody[i];

         var name = element.querySelector('td').textContent.toLowerCase();
         if (name.includes(input.toLowerCase())) {
            element.classList.add('select');
         }
         else {
            element.classList.remove('select');
         }

      }

   }
}

