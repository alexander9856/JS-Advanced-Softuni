class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayName() {
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        //   console.log(this)
    }
};
const person = new Person("John", "Doe");
person.displayName();// Name: John Doe
