function engCompany(arr) {
    let cars = new Map()

    for (let i of arr) {
        let [brand, model, producedCars] = i.split(' | ');
        producedCars = Number(producedCars)
        if (!cars.has(brand)) {
            cars.set(brand, [])
        }
        if(cars.get(brand).includes(model)){
           let index = cars.get(brand).indexOf(model) + 1
           cars.get(brand)[index] += producedCars
        }
        else{
            cars.get(brand).push(model,producedCars)
        }
    }
    let res = ''
    for(let i of cars){
        res += `${i[0]}\n`
        for(let j = 0; j < i[1].length; j++){
            if(j % 2 == 0){
                res += `###${i[1][j]} -> `
            }
            else{
                res += `${i[1][j]}\n`
            }
        }
    }
    console.log(res.trim())
}
engCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)