function incrSubset(arr) {
    let biggest = Number.MIN_SAFE_INTEGER;
    let newArr = [];
    for (let i of arr){
        if (i>=biggest){
            biggest = i
            newArr.push(biggest)
        }
    }
    return newArr
}

incrSubset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    
    
    
)