function validate() {
    let usernamePattern = /(^[A-Za-z0-9]{3,20}$)/
    let passPattern = /(^[\w]{5,15}$)/
    let emailPattern = /([^@]*)@([^@]*)\.([^@]*)/

    let isValidUsername;
    let isValidPass;
    let isValidEmail;
    let isValidCompany;

    let username = document.getElementById('username')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let confirmPass = document.getElementById('confirm-password')
    let isCompany = document.getElementById('company')
    isCompany.addEventListener('change', onChange)
    let companyInfo = document.getElementById('companyInfo')
    let companyNumber = document.getElementById('companyNumber')
    document.getElementById('submit').addEventListener('click', onClick)

    function onChange(ev) {
        isCompany.checked ? companyInfo.style.display = 'block' : companyInfo.style.display = 'none'
    }
    function onClick(ev) {
        ev.preventDefault()
        if (username.value.match(usernamePattern)) {
            username.style.border = ''
            isValidUsername = true
        }
        else {
            username.style.borderColor = 'red'
            isValid = false
            isValidUsername = false
        }

        if (email.value.match(emailPattern)) {
            email.style.border = ''
            isValidEmail = true
        }
        else {
            email.style.borderColor = 'red'
            isValidEmail = false
        }

        if (password.value.match(passPattern) && password.value === confirmPass.value) {
            password.style.border = ''
            confirmPass.style.border = ''
            isValidPass = true
        }
        else {
            password.style.borderColor = 'red'
            confirmPass.style.borderColor = 'red'
            isValidPass = false
        }

        if (isCompany.checked) {
            if (companyNumber.value >= 1000 && companyNumber.value <= 9999) {
                companyNumber.style.border = ''
                isValidCompany = true
            }
            else {
                companyNumber.style.borderColor = 'red'
                isValidCompany = false
            }
            if (isValidUsername && isValidPass && isValidEmail && isValidCompany) {
                document.getElementById('valid').style.display = 'block'
            }
            else {
                document.getElementById('valid').style.display = 'none'
            }
        }
        else {
            if (isValidUsername && isValidPass && isValidEmail) {
                document.getElementById('valid').style.display = 'block'
            }
            else {
                document.getElementById('valid').style.display = 'none'
            }
        }

    }

}

