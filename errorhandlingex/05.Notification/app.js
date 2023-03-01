function notify(message) {
    let msgDiv = document.getElementById('notification')
    msgDiv.textContent = message
    msgDiv.style.display = 'block'
    msgDiv.style.cursor = 'pointer'
    msgDiv.addEventListener('click', onClick)

    function onClick(ev) {
        ev.target.style.display = 'none'
    }
}
