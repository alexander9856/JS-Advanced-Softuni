function attachEventsListeners() {
    let btn = document.getElementById('convert').addEventListener('click', onClick)

    let input = document.getElementById('inputDistance');
    let output = document.getElementById('outputDistance');

    let obj = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    function onClick(ev) {
        let selectionInput = document.getElementById('inputUnits').value;
        let selectionOutput = document.getElementById('outputUnits').value;
        let start = Number(input.value) * obj[selectionInput]
        output.value = start / obj[selectionOutput]
    }
}