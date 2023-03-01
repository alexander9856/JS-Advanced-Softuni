function orbit(input) {
    let [rows, cols, starRow, starCol] = input
    let matrix = [];
    for (let i = 0; i < cols; i++) {
        matrix.push([])
    }
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1
        }
    }
    matrix.forEach((el) => console.log(el.join(' ')))
}
orbit([4, 4, 3, 3])