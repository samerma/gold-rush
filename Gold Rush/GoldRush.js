class GoldRush extends Matrix {
    constructor() {
        super()
        this.matrix = []
        this.score = {}
    }
    generateBoard(dimensions) {
        let board = []
        for (let r = 0; r < dimensions; r++) {
            board.push([])
            for (let c = 0; c < dimensions; c++) {
                let rand = Math.random()
                if (rand >= 0.4)
                    board[r].push('c')
                else if (rand < 0.4 && rand > 0.15)
                    board[r].push('w')
                else
                    board[r].push('e')
            }
        }
        board[0][0] = 1
        board[dimensions - 1][dimensions - 1] = 2
        this.matrix = board
        this.score = { 1: 0, 2: 0 }
    }
    movePlayer(playerNum, direction) {
        const coordinates = this.findCoordinate(playerNum)
        const opponent = playerNum * 2 % 3
        switch (direction) {
            case 'up':
                if (coordinates.row > 0
                    && this.get(coordinates.row - 1, coordinates.col) != 'w'
                    && this.get(coordinates.row - 1, coordinates.col) != opponent) {
                    this.alter(coordinates.row, coordinates.col, 'e')
                    if (this.get(coordinates.row - 1, coordinates.col) == 'c')
                        this.score[playerNum] += 10
                    this.alter(coordinates.row - 1, coordinates.col, playerNum)
                }
                break;
            case 'down':
                if (coordinates.row < this.matrix.length - 1
                    && this.get(coordinates.row + 1, coordinates.col) != 'w'
                    && this.get(coordinates.row + 1, coordinates.col) != opponent) {
                    this.alter(coordinates.row, coordinates.col, 'e')
                    if (this.get(coordinates.row + 1, coordinates.col) == 'c')
                        this.score[playerNum] += 10
                    this.alter(coordinates.row + 1, coordinates.col, playerNum)
                }
                break;
            case 'left':
                if (coordinates.col > 0
                    && this.get(coordinates.row, coordinates.col - 1) != 'w'
                    && this.get(coordinates.row, coordinates.col - 1) != opponent) {
                    this.alter(coordinates.row, coordinates.col, 'e')
                    if (this.get(coordinates.row, coordinates.col - 1) == 'c')
                        this.score[playerNum] += 10
                    this.alter(coordinates.row, coordinates.col - 1, playerNum)
                }
                break;
            case 'right':
                if (coordinates.col < this.matrix.length - 1
                    && this.get(coordinates.row, coordinates.col + 1) != 'w'
                    && this.get(coordinates.row, coordinates.col + 1) != opponent) {
                    this.alter(coordinates.row, coordinates.col, 'e')
                    if (this.get(coordinates.row, coordinates.col + 1) == 'c')
                        this.score[playerNum] += 10
                    this.alter(coordinates.row, coordinates.col + 1, playerNum)
                }
                break;
        }
    }
    isGameOver() {
        const endScore = 250
        return this.score[1] == endScore || this.score[2] == endScore
    }
}