function validate() {
    let validRegex = /^[a-z]+@[a-z]+.[a-z]+$/gm
    let input = document.getElementById('email');
    input.addEventListener('change', checkEmail);

    function checkEmail(event) {
        if (validRegex.test(event.target.value)) {
            event.target.removeAttribute('class');
        }
        else {
            event.target.className = 'error';
        }
    }
}