function solve() {
    class Balloon {
        constructor(color, weight) {
            this.color = color;
            this.hasWeight = weight
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, weight, ribbonColor, ribbonLength) {
            super(color, weight)
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }
        get ribbon() {
            let obj = {}
            for (let i in this._ribbon) {
                obj[i] = this._ribbon[i]
            }
            return obj
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, weight, ribbonColor, ribbonLength, text) {
            super(color, weight,ribbonColor, ribbonLength);
            this._text = text
        }
        get text() {
            return this._text
        }
    }

    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon
    }
}


let classes = solve();

let testPartyBalloon = new classes.BirthdayBalloon("yellow", 20.5, "red", 10.25,'qjmihuq');
console.log(testPartyBalloon.text);
