function solve() {
   let author = document.getElementById('creator')
   let title = document.getElementById('title')
   let category = document.getElementById('category')
   let content = document.getElementById('content')
   let createBtn = document.getElementsByClassName('btn create')[0]
   let archiveSec = document.querySelector('.archive-section ol')


   let main = document.querySelector('main section')
   createBtn.addEventListener('click', create)
   function create(ev) {
      ev.preventDefault()
      main.innerHTML += `
            <article>
               <h1>${title.value}</h1>
               <p>Category: <strong>${category.value}</strong></p>
               <p>Creator: <strong>${author.value}</strong></p>
               <p>${content.value}</p>
               <div class ="buttons">
                  <button class = "btn delete">Delete</button>
                  <button class = "btn archive">Archive</button>
               </div>
            </article>`
      Array.from(document.getElementsByClassName('archive'))
         .forEach(el => el.addEventListener('click', archive))
      function archive(ev) {
         let parent = ev.target.parentNode.parentNode
         let title = parent.children[0].textContent
         archiveSec.innerHTML += `<li>${title}</li>`

         let items = Array.from(archiveSec.querySelectorAll('li'))
         archiveSec.innerHTML = ''
         items.sort((a,b) => a.textContent.localeCompare(b.textContent))
         .forEach(el => {
            archiveSec.innerHTML += `<li>${el.textContent}</li>`
         })
         parent.remove()
      }
      Array.from(document.getElementsByClassName('delete'))
         .forEach(el => el.addEventListener('click', deletee))
      function deletee(ev) {
         main.innerHTML = `<h2>Articles</h2>`
      }
   }
}
