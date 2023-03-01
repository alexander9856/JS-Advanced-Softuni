window.addEventListener("load", solve);

function solve() {
  let title = document.getElementById('post-title')
  let category = document.getElementById('post-category')
  let content = document.getElementById('post-content')

  let publish = document.getElementById('publish-btn').addEventListener('click', onClick)

  let reviewList = document.getElementById('review-list')
  function onClick(ev) {
    if (title.value && category.value && content.value) {
      reviewList.innerHTML +=
        `<li class="rpost">
          <article>
                <h4>${title.value}</h4>
                <p>Category: ${category.value}</p>
                <p>Content: ${content.value}</p>
          </article>
          <button class="action-btn edit">Edit</button>
          <button class="action-btn approve">Approve</button>
        </li>`
      title.value = ''
      category.value = ''
      content.value = ''

      let editBtn = Array.from(document.getElementsByClassName('action-btn edit')).forEach((el) => el.addEventListener('click',edit))

      function edit(ev){
        let parent = ev.target.parentNode
        let categoryy = parent.children[0].children[1].textContent.split('Category: ')
        let contentt = parent.children[0].children[2].textContent.split('Content: ')
        title.value = parent.children[0].children[0].textContent
        category.value = categoryy[1]
        content.value = contentt[1]
        parent.remove()
      }

      let approveBtn = Array.from(document.getElementsByClassName('action-btn approve')).forEach((el) => el.addEventListener('click', approve))
      let publishedList = document.getElementById('published-list')
      function approve(ev){
        let parent = ev.target.parentElement
        publishedList.appendChild(parent)
        ev.target.remove()
        parent.querySelector('button').remove()
        
        
      }

      let clearBtn = document.getElementById('clear-btn').addEventListener('click', clear)

      function clear(ev){
        publishedList.textContent = ''
      }
    }
  }

}
