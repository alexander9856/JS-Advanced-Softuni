function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick() {
      let table = document.querySelectorAll('.container tbody tr');
      let typeSearch = document.getElementById('searchField').value;

      for (let i of table) {
         if (typeSearch.length > 0) {
            if (i.textContent == typeSearch || i.textContent.includes(typeSearch)) {
               i.className = 'select'
            }
            else {
               i.className = ''
            }
         }
         else{
            i.className = ''
         }
      }

   }
}