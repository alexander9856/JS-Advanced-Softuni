function cookingByNumbers(num, op1, op2, op3, op4, op5) {
    let startingPoint = Number(num);
    let arr = [op1, op2, op3, op4, op5]

    for (let i of arr){
        switch (i){
            case 'chop': startingPoint = chop(startingPoint);break;
            case 'dice': startingPoint = dice(startingPoint);break;
            case 'spice': startingPoint = spice(startingPoint);break;
            case 'bake': startingPoint = bake(startingPoint);break;
            case 'fillet': startingPoint = fillet(startingPoint);break;
        }
        console.log(startingPoint)
    }


    function chop(startingPoint) {
        return startingPoint / 2
    }
    function dice(startingPoint){
        return Math.sqrt(startingPoint)
    }
    function spice(startingPoint){
        return startingPoint + 1
    }
    function bake(startingPoint){
        return startingPoint * 3
    }

    function fillet(startingPoint){
        return (startingPoint * 0.8).toFixed(1)
    }


}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')