window.addEventListener('load', solution);

function solution() {
  let fullName = document.getElementById('fname')
  let email = document.getElementById('email')
  let phoneNumber = document.getElementById('phone')
  let address = document.getElementById('address')
  let postCode = document.getElementById('code')

  let preview = document.getElementById('infoPreview')
  let submitBTN = document.getElementById('submitBTN')
  submitBTN.addEventListener('click', submit);

  let editBtn = document.getElementById('editBTN')
  let continueBtn = document.getElementById('continueBTN')

  let allDiv = document.getElementById('block')

  function submit(ev) {
    if (fullName.value && email.value) {
      preview.innerHTML += `
        <li>Full Name: ${fullName.value}</li>
        <li>Email: ${email.value}</li>
        <li>Phone Number: ${phoneNumber.value}</li>
        <li>Address: ${address.value}</li>
        <li>Postal Code: ${postCode.value}</li>`
      fullName.value = ''
      email.value = ''
      phoneNumber.value = ''
      address.value = ''
      postCode.value = ''
      submitBTN.disabled = true
      editBtn.disabled = false
      continueBtn.disabled = false
    }
    editBtn.addEventListener('click', edit)
    function transfer(el) {
      let res = el.split(': ')
      return res[1]
    }
    function edit(ev) {
      let parent = ev.target.parentNode.previousElementSibling
      fullName.value = transfer(parent.children[0].textContent)
      email.value = transfer(parent.children[1].textContent)
      phoneNumber.value = transfer(parent.children[2].textContent)
      address.value = transfer(parent.children[3].textContent)
      postCode.value = transfer(parent.children[4].textContent)
      submitBTN.disabled = false
      editBtn.disabled = true
      continueBtn.disabled = true
      preview.innerHTML = ''
    }
    continueBtn.addEventListener('click', continuee)
    function continuee(ev) {
      allDiv.innerHTML = "<h3>Thank you for your reservation!</h3>"
    }
  }
}
