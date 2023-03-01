function diagonalAttack(arr) {
    let matrix = [];
    arr.forEach((el) => matrix.push(el.split(' ')));
    let sumLeftToRight = 0;
    let leftIndex = 0
    let sumRightToLeft = 0;
    let rightIndex = 0;
    let newMatrix = [];


    for (let i = 0; i < matrix.length; i++) {
        sumLeftToRight += Number(matrix[i][i]);
    }
    for (let i = matrix.length - 1; i >= 0; i--) {
        sumRightToLeft += Number(matrix[rightIndex++][i]);

    }
    leftIndex = 0;
    rightIndex = 0;


    if (sumLeftToRight !== sumRightToLeft) {
        matrix.forEach((el) => console.log(el.join(' ')))
    }

    else {
        for (let i = 0; i < matrix.length; i++) {
            let row = matrix[i];
            let changed = row.map((n) => n = sumLeftToRight)
            newMatrix.push(changed)
        }
        for (let b = 0; b < newMatrix.length; b++) {
            newMatrix[b][leftIndex] = matrix[b][leftIndex];
            leftIndex++
        }
        for (let c = matrix.length - 1; c >= 0; c--) {
            newMatrix[rightIndex][c] = matrix[rightIndex][c];
            rightIndex++
        }
        newMatrix.forEach((el) => console.log(el.join(' ')))

    }


}

diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']


)