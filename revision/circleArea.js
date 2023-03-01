function circleArea(arg){
    let inputType = typeof(arg)
    if (inputType == 'number'){
        let area = (Math.PI * arg ** 2).toFixed(2)
        console.log(area)
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
}

circleArea('name')