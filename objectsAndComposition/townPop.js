function townPopulation(arr) {
    let obj = {}
    for (let i of arr) {
        let [city, population] = i.split(' <-> ');
        if (obj.hasOwnProperty(city)) {
            obj[city] += Number(population)
        }
        else {
            obj[city] = Number(population)
        }
    }
    for(let key in obj){
        console.log(`${key} : ${obj[key]}`)
    }
}

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']

)