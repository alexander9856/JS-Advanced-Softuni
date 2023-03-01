function solve() {
    let task = document.getElementById('task')
    let desc = document.getElementById('description')
    let date = document.getElementById('date')
    let openSecDiv = document.getElementsByTagName('section')[1];
    let inProgressDiv = document.getElementsByTagName('section')[2];
    let completeDiv = document.getElementsByTagName('section')[3];

    document.getElementById('add').addEventListener('click', onClick)
    function onClick(ev) {
        ev.preventDefault();
        if (task.value.length > 0 && desc.value.length > 0 && date.value.length > 0) {
            let article = document.createElement('article')
            article.innerHTML += `<h3>${task.value}</h3><p>Description: ${desc.value}</p><p>Due Date: ${date.value}</p><div class = "flex"><button class="green">Start</button><button class="red">Delete</button></div>`
            openSecDiv.lastElementChild.appendChild(article)
        }
        else{
            return;
        }
        task.value =''
        desc.value = ''
        date.value = ''
        Array.from(document.querySelectorAll('.green')).forEach(el => el.addEventListener('click', start));
        Array.from(document.querySelectorAll('.red')).forEach(el => el.addEventListener('click', red))

        function start(ev) {
            let element = ev.target.parentNode.parentNode
            inProgressDiv.lastElementChild.appendChild(element)
            let finishBtn = document.createElement('button')
            finishBtn.textContent = 'Finish'
            finishBtn.className = 'orange'
            ev.target.remove()
            element.querySelector('.flex').appendChild(finishBtn);
            Array.from(document.querySelectorAll('.orange')).forEach(el => el.addEventListener('click', orange))
        }

        function orange(ev) {
            let element = ev.target.parentNode.parentNode
            completeDiv.lastElementChild.appendChild(element)
            element.querySelector('.flex').remove()

        }
        function red(ev){
            ev.target.parentNode.parentNode.remove()
        }
    }
}