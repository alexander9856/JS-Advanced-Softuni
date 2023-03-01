function colorize() {
    let trs = document.querySelectorAll('table tr')
    for (let i = 0; i < trs.length; i++) {
        if (i % 2 != 0) {
            trs[i].style.backgroundColor = 'teal'
        }
    }
}