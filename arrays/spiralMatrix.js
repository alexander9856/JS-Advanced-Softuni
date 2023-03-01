function solve(row, col) {
    let counter = 1
    let res = [];

    let startRow = 0;
    let endRow = row - 1;

    let startCol = 0;
    let endCol = col - 1;

    for (let i = 0; i < row; i++) {
        res.push([])
    }

    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            res[startCol][i] = counter;
            counter++
        }
        startRow++

        for (let i = startRow; i <= endRow; i++) {
            res[i][endCol] = counter;
            counter++
        }
        endCol--
        for (let i = endCol; i >= startCol; i--) {
            res[endRow][i] = counter
            counter++
        }
        endRow--
        for (let i = endRow; i >= startRow; i--) {
            res[i][startCol] = counter
            counter++
        }
        startCol++
    }
    res.forEach((el) => console.log(el.join(' ')))





}
solve(20, 20)