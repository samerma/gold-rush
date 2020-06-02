class Renderer {
    renderBoard(matrix) {
        $("#board-container").empty()
        const source = $('#board-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({ matrix: matrix })
        $("#board-container").append(newHTML)
    }
    renderScore(score) {
        $("#score-container").empty()
        const source = $('#score-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(score)
        $("#score-container").append(newHTML)
    }
    renderGameOver(playerNum) {
        $("#game-container").empty()
        const source = $('#game-over-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(playerNum)
        $("#game-container").append(newHTML)
    }
}