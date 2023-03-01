function extractText() {
    const items = document.getElementById('items').children;
    let  arr = [];
    for (let i of Array.from(items)){
        arr.push(i.textContent);

    }
    document.getElementById('result').textContent = arr.join('\n')
}