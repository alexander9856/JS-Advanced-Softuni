class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName
    }
    toString() {
        return `${this.constructor.name} (name: ${this.firstName}, lastName: ${this.lastName})`
    }
}

function extendProrotype(classToExtend) {
    classToExtend.prototype.species = 'Human'
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

extendProrotype(Person);
let p = new Person('Pesho', 'Gochev');
console.log(p.species)
console.log(p.toSpeciesString())