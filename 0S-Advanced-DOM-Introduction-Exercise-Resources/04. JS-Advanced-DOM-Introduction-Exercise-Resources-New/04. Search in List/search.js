function search() {
   var towns = Array.from(document.querySelectorAll("ul li"));

   var searchTerms = document.getElementById("searchText").value;

   for (var li of towns) {
      if (li.textContent.toLowerCase().includes(searchTerms.toLowerCase())) {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
      } else {
         li.style.fontWeight='';
         li.style.textDecoration='';
      }
   }
}
