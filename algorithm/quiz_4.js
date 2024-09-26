function diagonalMatrixCalculation() {
    const matrix = [
        [1, 2, 0], 
        [4, 5, 6], 
        [7, 8, 9]
    ];

    const leftToRightDiagonal = (matrix) => {
        let calculate = 0
        matrix.forEach((row, index) => {
            row.forEach((column, columnIndex) => {
                if (index === columnIndex) {
                    calculate += column;
                }
            });
        });

        return calculate;
    }

    const rightToLeftDiagonal = (matrix) => {
        let calculate = 0
        matrix.forEach((row, index) => {
            row.forEach((column, columnIndex) => {
                if(columnIndex === row.length - 1 - index) {
                    calculate += column;
                }
            })
        });

        return calculate;
    }

    const firstDiagonal = leftToRightDiagonal(matrix);
    const secondDiagonal = rightToLeftDiagonal(matrix);
    console.log(`First diagonal: ${firstDiagonal}`);
    console.log(`Second diagonal: ${secondDiagonal}`);
    console.log(`Result: ${firstDiagonal - secondDiagonal}`);
}

diagonalMatrixCalculation();