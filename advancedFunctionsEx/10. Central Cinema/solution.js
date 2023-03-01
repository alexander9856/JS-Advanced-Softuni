function solve() {
    document.querySelector('#container').lastElementChild.addEventListener('click', onClick);
    let name = document.querySelector('#container').children[0]
    let hall = document.querySelector('#container').children[1]
    let ticketPrice = document.querySelector('#container').children[2]
    let moviesUl = document.querySelector('#movies ul')
    let archiveUl = document.querySelector('#archive ul')

    function onClick(ev) {
        ev.preventDefault();
        if (name.value && hall.value && ticketPrice.value && !isNaN(Number(ticketPrice.value))) {
            moviesUl.innerHTML += `<li>
            <span>${name.value}</span>
            <strong>Hall: ${hall.value}</strong>
            <div>
                  <strong>${Number(ticketPrice.value).toFixed(2)}</strong>
                  <input placeholder="Tickets Sold">
                  <button>Archive</button>
                  </div>
                        </li>`
            name.value = null
            hall.value = null
            ticketPrice.value = null
        }
        let archiveBtn = Array.from(moviesUl.querySelectorAll('li'))
            .forEach(el => el.lastElementChild.lastElementChild
                .addEventListener('click', archiveAndDel))
        function archiveAndDel(ev) {
            let price = ev.target.parentNode.children[0].textContent
            let placeholderValue = ev.target.parentNode.children[1].value
            if (!isNaN(Number(placeholderValue)) && placeholderValue) {
                let total = (+price * +placeholderValue).toFixed(2);
                archiveUl
                    .innerHTML += `<li>
                <span>${ev.target.parentNode.parentNode.children[0].textContent}</span>
                <strong>Total amount: ${total}</strong>
                <button>Delete</button>
                    </li>`
                ev.target.parentNode.parentNode.remove()
            }
            let deleteBtn = Array.from(archiveUl.querySelectorAll('li'))
                .forEach(el => el.lastElementChild
                    .addEventListener('click', (el) => el.target.parentNode.remove()))

            let clearBtn = document.querySelector('#archive').lastElementChild.addEventListener('click', clear)
            function clear(ev) {
                Array.from(archiveUl.querySelectorAll('#archive ul li'))
                .forEach(el => el.remove())
            }
        }
    }
}
