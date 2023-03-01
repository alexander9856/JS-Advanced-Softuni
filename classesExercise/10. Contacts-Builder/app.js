class Contact {
	constructor(firstName, lastName, phone, email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.email = email;
		this._online = false;
	}
	get online(){
		return this._online
	}
	set online(value) {
		this._online = value
		if(this.titleDiv && value == false){
			this.titleDiv.classList.remove('online')
		}
		else if (this.titleDiv && value == true){
			this.titleDiv.classList.add('online')
		}
	}
	render(id) {
		let newArticle = document.createElement('article')

		this.titleDiv = document.createElement('div')
		this.titleDiv.className = 'title'
		this.button = document.createElement('button')
		this.button.innerHTML = '&#8505;'
		this.titleDiv.innerHTML = `${this.firstName} ${this.lastName}`
		if(this._online){
			this.titleDiv.classList.add('online')
		}
		this.titleDiv.appendChild(this.button)
		newArticle.appendChild(this.titleDiv)

		let infoDiv = document.createElement('div')
		infoDiv.className = 'info'
		infoDiv.innerHTML = `<span>&phone; ${this.phone}</span>
		<span>&#9993; ${this.email}</span>`
		infoDiv.style.display = 'none'
		newArticle.appendChild(infoDiv)

		document.getElementById(id).appendChild(newArticle)

		this.button.addEventListener('click', onClick)
		function onClick(ev) {
			let infoDiv = ev.target.parentNode.parentNode.querySelector('.info')

			infoDiv.style.display = infoDiv.style.display === 'none' ? 'block' : 'none'
		}
	}


}


{/* <body>
    <div id="main">
        <article>
            <div class="title">{firstName lastName}<button>&#8505;</button></div>
            <div class="info">
                <span>&phone; {phone}</span>
                <span>&#9993; {email}</span>
            </div>
        </article>
    </div>
</body> */}




let contacts = [
	new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
	new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
	new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")

];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
setTimeout(() => contacts[0].online = true, 2000);


