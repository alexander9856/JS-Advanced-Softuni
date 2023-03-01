function calorieObject(arr) {
    let obj = {};
    for(let i = 0; i < arr.length; i+=2){
        let item = arr[i];
        let calorie = Number(arr[i+1])
        obj[item] = calorie; 
    }
    console.log(obj)

}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])