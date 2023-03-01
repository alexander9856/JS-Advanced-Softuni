function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMove);
    gradient.addEventListener('mouseout', moveOut);


    function onMove(ev) {
        const box = ev.target;
        const offset = Math.floor(ev.offsetX / box.clientWidth * 100);
        let res = document.getElementById('result')
        res.textContent = `${offset}%`
    }

    function moveOut(ev) {
        document.getElementById('result').textContent = '';
    }
}