window.addEventListener('load', solve);

function solve() {
    let addBtn = document.getElementById('add-btn').addEventListener('click', add)
    let genre = document.getElementById('genre')
    let songName = document.getElementById('name')
    let author = document.getElementById('author')
    let dateOfCreation = document.getElementById('date')
    let collectionOfSongs = document.getElementsByClassName('all-hits-container')[0]
    function add(ev) {

        ev.preventDefault()
        if (genre.value && songName.value && author.value && dateOfCreation.value) {
            collectionOfSongs.innerHTML += `
            <div class="hits-info">
                <img src="./static/img/img.png">
                <h2>Genre: ${genre.value}</h2>
                <h2>Name: ${songName.value}</h2>
                <h2>Author: ${author.value}</h2>
                <h3>Date: ${dateOfCreation.value}</h3>
                <button class="save-btn">Save song</button>
                <button class="like-btn">Like song</button>
                <button class="delete-btn">Delete</button>
            </div>`
            genre.value = ''
            songName.value = ''
            author.value = ''
            dateOfCreation.value = ''

            let likeBtn = Array.from(document.getElementsByClassName('like-btn')).forEach((el) => el.addEventListener('click', like))
            function like(ev) {
                let totalLikes = document.getElementsByClassName('likes')[0].children[0]
                let digit = Number(totalLikes.textContent.toString().split(': ')[1])
                totalLikes.innerHTML = `Total Likes: ${digit += 1}`
                ev.target.disabled = true
            }
            let saveBtn = Array.from(document.getElementsByClassName('save-btn')).forEach((el) => el.addEventListener('click', save))
            function save(ev) {
                let savedSongs = document.getElementsByClassName('saved-container')[0]

                
                let savedGenre = ev.target.parentNode.children[1]
                let savedName = ev.target.parentNode.children[2]
                let savedAuthor = ev.target.parentNode.children[3]
                let savedDate = ev.target.parentNode.children[4]


                savedSongs.innerHTML += `
                <div class="hits-info">
                <img src="./static/img/img.png">
                <h2>${savedGenre.textContent}</h2>
                <h2>${savedName.textContent}</h2>
                <h2>${savedAuthor.textContent}</h2>
                <h3>${savedDate.textContent}</h3>
                <button class="delete-btn">Delete</button>
                </div>`
                ev.target.parentNode.remove()

                let deleteBtn = Array.from(document.getElementsByClassName('delete-btn')).forEach((el) => el.addEventListener('click', del))
            }
            let deleteBtn = Array.from(document.getElementsByClassName('delete-btn')).forEach((el) => el.addEventListener('click', del))
            function del(ev){
                ev.target.parentNode.remove()
            }
        }
    }
}