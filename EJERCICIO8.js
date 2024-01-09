function esSudokuCorrecto(sudoku) {
    if (sudoku.length !== 9) {
        return false;
    }

    for (let i = 0; i < 9; i++) {
        if (sudoku[i].length !== 9) {
            return false;
        }
    }

    for (let i = 0; i < 9; i++) {
        let fila = sudoku[i];
        let columna = [];
        for (let j = 0; j < 9; j++) {
            columna.push(sudoku[j][i]);
        }

        let cuadrado = [];
        for (let j = 0; j < 9; j++) {
            cuadrado.push(sudoku[Math.floor(i / 3) * 3 + j % 3][Math.floor(i % 3)]);
        }

        if (new Set([...fila, ...columna, ...cuadrado]).size !== 9) {
            return false;
        }
    }

    return true;
}

let sudoku = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];
console.log(esSudokuCorrecto(sudoku));