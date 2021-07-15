function search() {
   const towns = document.querySelectorAll("ul li");

   var searchTerms = document.getElementById("searchText").value;

   for (const li of towns) {
      if (li.textContent.toLowerCase().includes(searchTerms.toLowerCase())) {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
      } else {
         li.style.fontWeight='';
         li.style.textDecoration='';
      }
   }
}
