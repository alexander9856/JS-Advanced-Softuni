function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', matchFunc)
    
    function matchFunc({target}) {
        let pattern = /[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+/gm;

        if (!target.value.match(pattern)) {
            target.className = 'error'
        }
        else{
            target.className = ''
        }
    }
}