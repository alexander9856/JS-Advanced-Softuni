window.addEventListener('load', solve);

function solve() {
    document.getElementById('add').addEventListener('click', add)
    let model = document.getElementById('model')
    let year = document.getElementById('year')
    let description = document.getElementById('description')
    let price = document.getElementById('price')
    let total = document.getElementsByClassName('total-price')[0]

    let furnitureList = document.getElementById('furniture-list')
    function add(ev) {
        ev.preventDefault()
        if (model.value && description.value && year.value >= 0 && price.value >= 0) {
            furnitureList.innerHTML += `
            <tr class="info">
                <td>${model.value}</td>
                <td>${Number(price.value).toFixed(2)}</td>
                <td>
                    <button class="moreBtn">More Info</button>
                    <button class="buyBtn">Buy it</button>
                </td>
            </tr>
            <tr class="hide">
                <td>Year: ${year.value}</td>
                <td colspan="3">Description: ${description.value}</td>
            </tr>`
            model.value = ''
            year.value = ''
            description.value = ''
            price.value = ''
        }
        Array.from(document.getElementsByClassName('moreBtn'))
            .forEach(el => el.addEventListener('click', change))
        function change(ev) {
            ev.target.textContent == 'More Info' ? ev.target.textContent = 'Less Info' : ev.target.textContent = 'More Info'
            let parent = ev.target.parentNode.parentNode.nextElementSibling
            if (ev.target.textContent == 'Less Info') {
                parent.style.display = 'contents'
            }
            else {
                parent.style.display = 'none'
            }
        }
        Array.from(document.getElementsByClassName('buyBtn'))
            .forEach(el => el.addEventListener('click', buy))
        function buy(ev) {
            let first = ev.target.parentNode.parentNode
            let second = ev.target.parentNode.parentNode.nextElementSibling
            let cost = Number(ev.target.parentNode.parentNode.children[1].textContent)
            total.textContent = (Number(total.textContent) + cost).toFixed(2)
            first.remove()
            second.remove()
        }
    }
}
