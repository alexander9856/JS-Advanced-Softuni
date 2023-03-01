function fruitBate(type, grams, $kg) {

    let kg = grams / 1000
    console.log(`I need $${(kg * $kg).toFixed(2)} to buy ${(kg).toFixed(2)} kilograms ${type}.`)


}
fruitBate('orange', 2500, 1.80)