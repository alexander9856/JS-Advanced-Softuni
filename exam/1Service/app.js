window.addEventListener('load', solve);

function solve() {
    let sendBtn = document.querySelector('#right button').addEventListener('click', submit)

    let productType = document.getElementById('type-product')
    let description = document.getElementById('description')
    let clientName = document.getElementById('client-name')
    let clientPhone = document.getElementById('client-phone')

    let completedOrders = document.getElementById('completed-orders')

    function submit(ev) {
        // ev.preventDefault()
        if (description.value && clientName.value && clientPhone.value) {
            let receivedOrders = document.getElementById('received-orders')
            receivedOrders.innerHTML +=
                `<div class="container">
                    <h2>Product type for repair: ${productType.value}</h2>
                    <h3>Client information: ${clientName.value}, ${clientPhone.value}</h3>
                    <h4>Description of the problem: ${description.value}</h4>
                    <button class="start-btn">Start repair</button>
                    <button class="finish-btn" disabled>Finish repair</button>
                </div>`
            description.value = ''
            clientName.value = ''
            clientPhone.value = ''
            Array.from(document.getElementsByClassName('start-btn')).forEach((y) => y.addEventListener('click', start))
            function start(ev) {
                ev.target.disabled = true
                ev.target.parentNode.lastElementChild.disabled = false
            }
            Array.from(document.getElementsByClassName('finish-btn')).forEach((el) => el.addEventListener('click', finish))
            function finish(ev) {
                let parent = ev.target.parentNode
                let pType = parent.children[0].textContent
                let clientInfo = parent.children[1].textContent
                let descOfProblem = parent.children[2].textContent
                completedOrders.innerHTML += `
                        <div class="container">
                            <h2>${pType}</h2>
                            <h3>${clientInfo}</h3>
                            <h4>${descOfProblem}</h4>
                        </div>`
                parent.remove()
                let clearBtn = document.querySelector('#completed-orders .clear-btn').addEventListener('click', clear)
                function clear(e) {
                    e.target.parentNode.innerHTML = `
                    <h2>Completed orders:</h2>
                    <img src="./style/img/completed-order.png">
                    <button class="clear-btn">Clear</button>
                    `
                }
            }
        }
    }




}



