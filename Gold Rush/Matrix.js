class Matrix {
    constructor(row, col) {
        this.matrix = this.generateMatrix(row, col)
    }
    generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }
    get(row, col) {
        return this.matrix[row][col]
    }
    alter(row, col, val) {
        this.matrix[row][col] = val
    }
    findCoordinate(value) {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] == value)
                    return { row: i, col: j }
            }
        }
        return null
    }
    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line + '\n')
        }
    }
    printColumn(col) {
        let line = ''
        for (let i = 0; i < this.matrix.length; i++) {
            line += (this.matrix[i][col] + "\t")
        }
        console.log('column(' + col + '): ' + line)
    }
    printRow(row) {
        let line = ''
        for (let i = 0; i < this.matrix[row].length; i++) {
            line += this.matrix[row][i] + "\t"
        }
        console.log('row(' + row + '): ' + line)
    }
}