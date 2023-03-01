function solve() {
    let hireBtn = document.getElementById('add-worker').addEventListener('click', hire)

    let firstName = document.getElementById('fname')
    let lastName = document.getElementById('lname')
    let email = document.getElementById('email')
    let birthday = document.getElementById('birth')
    let position = document.getElementById('position')
    let salary = document.getElementById('salary')

    let sum = document.getElementById('sum')
    function hire(ev) {
        ev.preventDefault()
        if (firstName.value && lastName.value && email.value && birthday.value && position.value && salary.value) {
            let table = document.getElementById('tbody')
            table.innerHTML += `
            <tr>
                <td>${firstName.value}</td>
                <td>${lastName.value}</td>
                <td>${email.value}</td>
                <td>${birthday.value}</td>
                <td>${position.value}</td>
                <td>${salary.value}</td>
                <td>
                <button class="fired">Fired</button> <button class="edit">Edit</button>
                    </td>
            </tr>`
            sum.textContent = (Number(sum.textContent) + Number(salary.value)).toFixed(2)
            firstName.value = ''
            lastName.value = ''
            email.value = ''
            birthday.value = ''
            position.value = ''
            salary.value = ''

            let editBtn = Array.from(document.getElementsByClassName('edit')).forEach((el) => el.addEventListener('click', edit))
            let firedBtn = Array.from(document.getElementsByClassName('fired')).forEach((el) => el.addEventListener('click', fire))
            function edit(ev) {
                let parent = ev.target.parentNode.parentNode
                firstName.value = parent.children[0].textContent
                lastName.value = parent.children[1].textContent
                email.value = parent.children[2].textContent
                birthday.value = parent.children[3].textContent
                position.value = parent.children[4].textContent
                salary.value = parent.children[5].textContent
                sum.textContent = (Number(sum.textContent) - Number(parent.children[5].textContent)).toFixed(2)
                parent.remove()
            }
            function fire(ev){
                let parentToFire = ev.target.parentNode.parentNode
                sum.textContent = (Number(sum.textContent) - Number(parentToFire.children[5].textContent)).toFixed(2)

                parentToFire.remove()

            }
        }


    }
}
solve()