function create(words) {
   let content = document.getElementById('content')
   for (let i of words) {
      let div = document.createElement('div');
      let para = document.createElement('p');
      para.textContent = i
      div.appendChild(para)
      div.addEventListener('click', onClick)
      content.appendChild(div)
      para.style.display = 'none'
   }
   function onClick(ev) {
      ev.currentTarget.children[0].style.display = ''
   }
}