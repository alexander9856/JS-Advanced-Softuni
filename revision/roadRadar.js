function roadRadar(speed, area) {

    let obj = { motorway: 130, interstate: 90, city: 50, residential: 20 }
    if (speed <= obj[area]) {
        console.log(`Driving ${speed} km/h in a ${obj[area]} zone`)
    }

    else {
        if (speed > obj[area] && speed <= obj[area] + 20) {
            console.log(`The speed is ${speed - obj[area]} km/h faster than the allowed speed of ${obj[area]} - speeding`)
        }
        else if (speed > obj[area] + 20 && speed <= obj[area] + 40) {
            console.log(`The speed is ${speed - obj[area]} km/h faster than the allowed speed of ${obj[area]} - excessive speeding`)
        }
        else{
            console.log(`The speed is ${speed - obj[area]} km/h faster than the allowed speed of ${obj[area]} - reckless driving`)
        }
    }


}
roadRadar(120, 'interstate')