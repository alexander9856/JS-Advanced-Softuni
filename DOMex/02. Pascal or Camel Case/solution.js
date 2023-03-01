function solve() {
  let text = document.getElementById('text').value.split(' ');
  let type = document.getElementById('naming-convention').value;
  let resContainer =  document.getElementById('result')
  let res = ''
  if (type == "Camel Case") {
    res = text.shift().toLowerCase()
    for (let i of text) {
      res += i[0].toUpperCase() + i.slice(1, i.length).toLowerCase()
    }
    resContainer.textContent = res
  }
  else if (type == "Pascal Case"){
    for (let i of text){
      res += i[0].toUpperCase() + i.slice(1,i.length).toLowerCase();

    }
    resContainer.textContent = res
  }
  else{
    resContainer.textContent = 'Error!'
  }
}