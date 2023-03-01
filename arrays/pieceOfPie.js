function pieceOfPie(arr, str1, str2) {
    
    let firstIndex = arr.indexOf(str1);
    let secondIndex = arr.indexOf(str2);
    let newArr= arr.slice(firstIndex,secondIndex + 1)

    return newArr

}

pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
    
)
