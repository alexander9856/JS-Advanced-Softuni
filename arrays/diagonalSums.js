function diagonalSums(input) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = input[0].length - 1;
   
    for (let i of input){
        firstDiagonal += i[firstIndex];
        firstIndex++;
        secondDiagonal += i[secondIndex];
        secondIndex--;
    }
    console.log(firstDiagonal + ' ' + secondDiagonal);
}

diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]

)