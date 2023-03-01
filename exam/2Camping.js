class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = []
    }
    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.")
        }
        else {
            let participant = this.listOfParticipants.filter((x) => x.name == name)[0]
            if (participant) {
                return `The ${name} is already registered at the camp.`
            }
            else if (money < this.priceForTheCamp[condition]) {
                return `The money is not enough to pay the stay at the camp.`
            }
            else {
                this.listOfParticipants.push({ name, condition, power: 100, wins: 0 })
                return `The ${name} was successfully registered.`
            }
        }
    }
    unregisterParticipant(name) {
        let isParticipate = this.listOfParticipants.filter((x) => x.name === name)[0]
        if (!isParticipate) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        else {
            this.listOfParticipants.splice(this.listOfParticipants.indexOf(isParticipate), 1)
            return `The ${name} removed successfully.`
        }
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        let first = this.listOfParticipants.filter((x) => x.name === participant1)[0]
        if (!first) {
            throw new Error(`Invalid entered name/s.`)
        }
        if (typeOfGame == 'WaterBalloonFights') {
            let second = this.listOfParticipants.filter((x) => x.name === participant2)[0]
            if (!second) {
                throw new Error(`Invalid entered name/s.`)
            }
            else {
                if (first.condition !== second.condition) {
                    throw new Error(`Choose players with equal condition.`)
                }
            }
            if (first.power > second.power) {
                first.wins++
                return `The ${first.name} is winner in the game ${typeOfGame}.`
            }
            else if (first.power < second.power) {
                second.wins++
                return `The ${second.name} is winner in the game ${typeOfGame}.`
            }
            else {
                return `There is no winner.`
            }
        }
        else if (typeOfGame == 'Battleship') {
            first.power += 20
            return `The ${first.name} successfully completed the game ${typeOfGame}.`
        }
    }
    toString () {
        let res = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`
        this.listOfParticipants.sort((a,b) => b.wins - a.wins)
        .forEach((el) => res += `${el.name} - ${el.condition} - ${el.power} - ${el.wins}\n`)
        return res.trim()
    }
}



const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());


