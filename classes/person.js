class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
    }
    toString() {
        return(`${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`)
    }
}
let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());


// expect(str).to.be.equal('Peter Marinov (age: 18, email: pesho18@abv.bg)');