function solution() {
    let giftName = document.querySelector('.card div input')
    let addGiftBtn = document.querySelector('.card div button')
    let listOfGiftsUl = document.querySelector('.card ul')


    let sendGiftsUl = document.querySelectorAll('.card ul')[1]
    let discardDiftsUl = document.querySelectorAll('.card ul')[2]

    addGiftBtn.addEventListener('click', add)
    function add(ev) {
        listOfGiftsUl.innerHTML += `
        <li class="gift">${giftName.value}</li>`
        let items = Array.from(listOfGiftsUl.querySelectorAll('li'))
        listOfGiftsUl.innerHTML = ''
        items.sort((a, b) => a.textContent.localeCompare(b.textContent))
        items.forEach(el => {
            let li = document.createElement('li')
            let splitted = el.textContent.split('Send')
            li.textContent = splitted[0]
            li.classList.add('gift')

            let sendBtn = document.createElement('button')
            sendBtn.textContent = "Send"
            sendBtn.id = 'sendButton'
            sendBtn.addEventListener('click',send)
            li.appendChild(sendBtn)


            let discardBtn = document.createElement('button')
            discardBtn.textContent = "Discard"
            discardBtn.id = 'discardButton'
            discardBtn.addEventListener('click', discard)
            li.appendChild(discardBtn)

            listOfGiftsUl.appendChild(li)
            
            giftName.value = ''
            console.log(items)
        
        })
        function send(ev){
            let parent = ev.target.parentNode
            let splitt = parent.textContent.split('Send')
            sendGiftsUl.innerHTML+=`<li>${splitt[0]}</li>`
            parent.remove()
        }
        function discard(ev){
            let parent = ev.target.parentNode
            let splitt = parent.textContent.split('Send')
            discardDiftsUl.innerHTML+=`<li>${splitt[0]}</li>`
            parent.remove()
        }


      
    }
}
