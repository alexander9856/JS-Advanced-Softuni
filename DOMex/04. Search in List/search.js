function search() {
   let items = Array.from(document.querySelectorAll('ul li'))
   let textInput = document.getElementById('searchText').value;
   let resContainer = document.getElementById('result');
   let count = 0
  

   for (let i of items){
      if (i.textContent.includes(textInput)){
         i.style.fontWeight = 'bold';
         i.style.textDecoration = 'underline';
         count++
      }
      else{
         i.style.fontWeight = 'normal';
         i.style.textDecoration = 'none'
      }
   }
   resContainer.textContent = `${count} matches found`
  
   
}
