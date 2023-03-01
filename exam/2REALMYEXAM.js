class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = []
    }
    newAdditions(footballPlayers) {
        let names = []
        footballPlayers.forEach(el => {
            let [name, age, playerValue] = el.split('/');
            age = Number(age)
            playerValue = Number(playerValue)
            let found = this.invitedPlayers.filter((x) => x.name === name)[0];

            if (found) {
                if (found.playerValue < playerValue) {
                    found.playerValue = playerValue
                }
            }
            else {
                this.invitedPlayers.push({ name, age, playerValue })
            }
            if (!names.includes(name)) {
                names.push(name)
            }
        })
        return `You successfully invite ${names.join(', ')}.`


    }
    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/')
        playerOffer = Number(playerOffer)
        let found = this.invitedPlayers.filter((x) => x.name === name)[0]
        if (!found) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if (playerOffer < found.playerValue && found.playerValue !== 'Bought') {
            throw new Error(`The manager's offer is not enough to sign a contract with ${found.name}, ${found.playerValue - playerOffer} million more are needed to sign the contract!`)
        }
        else{
            found.playerValue = 'Bought'
        }
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }
    ageLimit(name, age) {
        let found = this.invitedPlayers.filter((x) => x.name == name)[0];
        if (!found) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if (found.age < age) {
            let diff = Math.abs(age - found.age)
            if (diff < 5) {
                return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`
            }
            else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        }
        if (found.age >= age) {
            return `${name} is above age limit!`
        }
    }
    transferWindowResult() {
        let res = `Players list:\n`
        this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name))
            .forEach(el => res += `Player ${el.name}-${el.playerValue}\n`)
        return res.trim()
    }

}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Kylian Mbappé/23/180", "Lionel Messi/35/50", "Pau Torres/25/52"]));

