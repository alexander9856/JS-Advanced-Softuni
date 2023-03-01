function workers(arr) {
    let restaurants = {};
    let average = 0;
    let best = 0;
    for (let i of arr) {
        let restaurantInfo = i.split(' - ');
        let restaurant = restaurantInfo.shift();
        let workers = restaurantInfo.toString().split(', ');
        let obj = {}
        for (let i of workers) {
            let tokens = i.split(' ');
            let name = tokens[0];
            let salary = tokens[1];
            obj[name] = salary;
        }
        if (!restaurants.hasOwnProperty(restaurant)) {
            restaurants[restaurant] = obj;

        }
        else {
            Object.assign(restaurants[restaurant], obj)
        }

    }
    let bestRestaurant = bestAndAverage(restaurants);
    console.log(`Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].average} Best Salary: ${bestRestaurant[1].best}`);
    bestRestaurant.shift()
    let res = ''
    for (let i of bestRestaurant) {
        let sorted = Object.entries(i).sort((a, b) => b[1] - a[1])
        for (let b of sorted) {
            if (b[0] == 'average' || b[0] == 'best') {
                continue
            }
            res +=(`Name: ${b[0]} With Salary: ${b[1]} ` )
        }
    }
    console.log(res.trim())
}

function bestAndAverage(restaurants) {
    let best = Number.MIN_SAFE_INTEGER;
    let entries = Object.entries(restaurants);
    let average = 0;
    let counter = 0;
    for (let i of entries) {
        for (let y in i[1]) {

            if (best < Number(i[1][y])) {
                best = Number(i[1][y])
            }
            average += Number(i[1][y])
            counter++

        }
        i[1].average = (average / counter).toFixed(2)
        average = 0
        counter = 0
        i[1].best = best.toFixed(2)
        best = 0;
    }

    entries = Object.entries(restaurants);
    let sorted = entries.sort((a, b) => b[1].average - a[1].average)
    return sorted[0]

}


workers(["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"])