class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100
    }
    addGoal(peak, altitude) {
        if (!this.goals.hasOwnProperty(peak)) {
            this.goals[peak] = altitude
            return `You have successfully added a new goal - ${peak}`
        }
        else {
            return `${peak} has already been added to your goals`
        }
    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`)
        }
        if (this.resources == 0) {
            throw new Error("You don't have enough resources to start the hike")
        }
        if (this.resources - Number(time) * 10 < 0) {
            return "You don't have enough resources to complete the hike"
        }
        else {
            this.resources -= Number(time) * 10
            this.listOfHikes.push({ peak, time, difficultyLevel });
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
        }
    }
    rest(time) {
        this.resources += time * 10
        if (this.resources >= 100) {
            this.resources = 100
            return `Your resources are fully recharged. Time for hiking!`
        }
        else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`
        }
    }
    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`
        }

        switch (criteria) {
            case 'easy':
                let arr = []
                for (let i of this.listOfHikes) {
                    if (i.difficultyLevel == 'easy') {
                        arr.push(i)
                    }
                }
                if (arr.length == 0) {
                    return `${this.username} has not done any ${criteria} hiking yet`
                }
                arr.sort((a, b) => a.time - b.time)
                let item = arr[0]
                return `${this.username}'s best ${criteria} hike is ${item.peak} peak, for ${item.time} hours`
            case 'hard':
                let arr2 = []
                for (let i of this.listOfHikes) {
                    if (i.difficultyLevel == 'hard') {
                        arr2.push(i)
                    }
                }
                if (arr2.length == 0) {
                    return `${this.username} has not done any ${criteria} hiking yet`
                }
                arr2.sort((a, b) => a.time - b.time)
                let item2 = arr2[0]
                return `${this.username}'s best ${criteria} hike is ${item2.peak} peak, for ${item2.time} hours`
            case 'all':
                let res = `All hiking records:\n`
                this.listOfHikes.forEach((el) => res += `${this.username} hiked ${el.peak} for ${el.time} hours\n`)
                return res.trim()
        }
    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.addGoal('everest', 2925);

user.hike('Musala', 8, 'hard');
user.hike('everest', 1, 'easy');

console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
