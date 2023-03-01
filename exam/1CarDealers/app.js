window.addEventListener("load", solve);

function solve() {
  let publishButt = document.getElementById('publish').addEventListener('click', onClick)

  let brand = document.getElementById('make')
  let model = document.getElementById('model')
  let productYear = document.getElementById('year')
  let fuel = document.getElementById('fuel') //optional
  let originalCost = document.getElementById('original-cost')
  let sellingPrice = document.getElementById('selling-price')
  let tbody = document.getElementById('table-body')

  function onClick(ev) {
    ev.preventDefault()
    if(brand.value && model.value && productYear.value && fuel.value && originalCost.value && sellingPrice.value && sellingPrice.value >= originalCost.value){
      tbody.innerHTML +=
      `<tr class="row">
          <td>${brand.value}</td>
          <td>${model.value}</td>
          <td>${productYear.value}</td>
          <td>${fuel.value}</td>
          <td>${originalCost.value}</td>
          <td>${sellingPrice.value}</td>
          <td>
          <button class="action-btn edit">Edit</button>
          <button class="action-btn sell">Sell</button>
          </td>
          `
    brand.value = ''
    model.value = ''
    productYear.value = ''
    fuel.value = ''
    originalCost.value = ''
    sellingPrice.value = ''


    let editButton = Array.from(document.getElementsByClassName('action-btn edit')).forEach((el) => el.addEventListener('click', edit))
    function edit(ev) {
      let parent = ev.target.parentNode.parentNode
      brand.value = parent.children[0].textContent
      model.value = parent.children[1].textContent
      productYear.value = parent.children[2].textContent
      fuel.value = parent.children[3].textContent
      originalCost.value = parent.children[4].textContent
      sellingPrice.value = parent.children[4].textContent
      parent.remove()
    }

    let sellButton = Array.from(document.getElementsByClassName('action-btn sell')).forEach((el) => el.addEventListener('click', sell))
    let soldCarsList = document.getElementById('cars-list')
    function sell(ev) {
      let targetParent = ev.target.parentNode.parentNode
      soldCarsList.innerHTML +=
        `<li class="each-list">
          <span>${targetParent.children[0].textContent} ${targetParent.children[1].textContent}</span>
          <span>${targetParent.children[2].textContent}</span>
          <span>${Math.abs(Number(targetParent.children[5].textContent) - Number(targetParent.children[4].textContent))}</span>
          </li>`
      
      let profitMade = document.getElementById('profit')
      let totalProfit = Number(profitMade.textContent)
      totalProfit += Math.abs(Number(targetParent.children[5].textContent) - Number(targetParent.children[4].textContent))

     targetParent.remove()
     profitMade.textContent = totalProfit.toFixed(2)

    }
    }
   



  }

}
