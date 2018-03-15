class Lab1 {
    task1(str) {
        str = str.toLowerCase();
        var result = '';
        for (var char of str) {
            if (str.split(char).length - 1 > 1) {
                result += ')';
            } else {
                result += '(';
            }
        }
        return result;
    }

    task2(sudokuMatrix) {
        let isRowValid = row => {
            let rowSum = 0;
            return row.length == 9 && new Set(row).size == 9;
        };
        let areColumnsValid = matrix => {
            let columns = [];

            //map columns to horizontal arrays
            for (var i = 0; i < matrix.length; i++) {
                let column = matrix.map(row => row[i]);
                columns.push(column);
            }
            return columns.every(column => isRowValid(column));
        }

        let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        if (sudokuMatrix.length != 9 || !areColumnsValid(sudokuMatrix) || !sudokuMatrix.every(isRowValid)) return false;

        //select boxes into rows    
        let plainBoxes = [];
        for (let i = 0; i < 9; i++) {
            plainBoxes.push(new Array());
        }
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let currentBox = plainBoxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)];
                if (currentBox.find(el => el == sudokuMatrix[i][j])) {
                    return false;
                } else {
                    currentBox.push(sudokuMatrix[i][j]);
                }
            }
        }

        return true;
    }
}


let executor = new Lab1();

let string = "Success";
console.log(executor.task1(string));

console.log(executor.task2([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]));