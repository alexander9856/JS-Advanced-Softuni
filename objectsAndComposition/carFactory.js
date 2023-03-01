function carFactory(obj) {
    obj.wheelsize % 2 == 0 ? obj.wheelsize -= 1 : obj.wheelsize
    let car = {
        model: obj.model,
        engine: { power: 0, volume: 0 },
        carriage: { type: obj.carriage, color: obj.color },
        wheels: [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize]
    }

    if (obj.power <= 90) {
        car.engine.power = 90;
        car.engine.volume = 1800
    }
    else if (obj.power <= 120) {
        car.engine.power = 120;
        car.engine.volume = 2400;
    }
    else if (obj.power <= 200) {
        car.engine.power = 200;
        car.engine.volume = 3500
    }

    return car

}

carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}

)