function ticTacToe(arr) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    
    let isWin = false;
    let player = 'X';

    for (let i = 0; i < arr.length; i++) {
        let moves = arr[i].split(' ');
        let row = Number(moves[0]);
        let col = Number(moves[1]);
        if (dashboard[row][col] !== false) {
            console.log('This place is already taken. Please choose another!')
        }
        else{
            dashboard[row][col] = player;
            player = player === 'X' ? 'O' : "X";
        }
        for (let b = 0; b < 3; b++) {
            let rowDashboard = dashboard[b];
            let colDashBoard = dashboard[0][b];
            if (rowDashboard[0] === rowDashboard[1] && rowDashboard[0] === rowDashboard[2] && rowDashboard[0] !== false) {
                console.log(`Player ${rowDashboard[0]} wins!`);
                isWin = true;
                break
            }
            else if (colDashBoard === dashboard[1][b] && colDashBoard === dashboard[2][b] && colDashBoard !== false) {
                console.log(`Player ${colDashBoard} wins!`)
                isWin = true
                break
            }
            else if (dashboard[0][0] == dashboard[1][1] && dashboard[0][0] == dashboard[2][2] && dashboard[0][0] !== false) {
                console.log(`Player ${dashboard[0][0]} wins!`)
                isWin = true
                break
            }
            else if (dashboard[0][2] == dashboard[1][1] && dashboard[0][2] == dashboard[2][0] && dashboard[0][2] !== false) {
                console.log(`Player ${dashboard[0][2]} wins!`)
                isWin = true
                break
            }
        }
        if (isWin === true) {
            break
        }
        else if (dashboard.every(row => row.every(el => el !== false))) {
            console.log('The game ended! Nobody wins :(')
            break
        }
    }
    dashboard.forEach((el) => console.log(el.join('\t')))
}

ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]








)