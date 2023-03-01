function generateReport() {
    let output = document.getElementById('output');

    let cols = document.querySelectorAll('thead tr th input');
    let info = document.querySelectorAll('tbody tr');

    let arr = []
    for (let i = 0; i < info.length; i++) {
        let obj = {}
        for (let j = 0; j < cols.length; j++){
            if(cols[j].checked){
                obj[cols[j].name] = info[i].children[j].textContent
            }
        }
        arr.push(obj)
   }
   output.textContent = JSON.stringify(arr)
}