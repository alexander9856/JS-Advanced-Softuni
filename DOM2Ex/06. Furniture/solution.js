function solve() {
  let exWrap = document.getElementById('exercise');
  let generateBtn = exWrap.children[2].addEventListener('click', onClick);
  let input = exWrap.children[1];
  let output = exWrap.lastElementChild.previousElementSibling;
  let buyBtn = exWrap.lastElementChild.addEventListener('click', buy)

  function onClick(ev) {
    let jsoned = JSON.parse(input.value)
    for (let i of jsoned) {
      let tbody = document.querySelector('tbody');
      tbody.innerHTML += `<tr><td><img src = "${i.img}"></td><td>${i.name}</td><td>${i.price}</td><td>${i.decFactor}</td><td><input type="checkbox"/></td></tr>`;
    }
  }

  function buy(ev) {
    let tbody = document.querySelector('tbody');
    let arr = []
    let total = 0;
    let totalDecFactor = 0
    for (let i = 0; i < tbody.children.length; i++) {
      if (tbody.children[i].querySelector('input[type="checkbox"]').checked) {
        arr.push(tbody.children[i].children[1].textContent)
        total += Number(tbody.children[i].children[2].textContent);
        totalDecFactor += Number(tbody.children[i].children[3].textContent)
      }
    }
    let averageDecFactor = totalDecFactor / arr.length;
    output.textContent = `Bought furniture: ${arr.join(', ')}\nTotal price: ${total.toFixed(2)}\nAverage decoration factor: ${averageDecFactor}`
  }
}