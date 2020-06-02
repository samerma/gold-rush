const game = new GoldRush()
const render = new Renderer()
game.generateBoard(10)
game.print()
console.log(game.matrix)
Handlebars.registerHelper('isCoin', function (value) {
    return value == 'c';
});
Handlebars.registerHelper('isPlayer1', function (value) {
    return value == 1
});
Handlebars.registerHelper('isPlayer2', function (value) {
    return value == 2;
});
Handlebars.registerHelper('other', function (value) {
    return value == 'w' || value == 'e';
});

render.renderBoard(game.matrix)
render.renderScore(game.score)

//wsda
$(document).keypress(function (e) {
    let validKey = false
    switch (e.which) {
        case 119: //w
            game.movePlayer(1, "up")
            validKey = true
            break;
        case 115: //s
            game.movePlayer(1, "down")
            validKey = true
            break;
        case 97: //a
            game.movePlayer(1, "left")
            validKey = true
            break;
        case 100: //d
            game.movePlayer(1, "right")
            validKey = true
            break;
    }
    if (validKey) {
        render.renderBoard(game.matrix)
        render.renderScore(game.score)
    }
    if (game.isGameOver()) {
        render.renderGameOver(1)
    }
})
//arrows
$(document).keydown(function (e) {
    let validKey = false
    switch (e.which) {
        case 37: // left
            game.movePlayer(2, "left")
            validKey = true
            break;
        case 38: // up
            game.movePlayer(2, "up")
            validKey = true
            break;
        case 39: // right
            game.movePlayer(2, "right")
            validKey = true
            break;
        case 40: // down
            game.movePlayer(2, "down")
            validKey = true
            break;
    }
    if (validKey) {
        render.renderBoard(game.matrix)
        render.renderScore(game.score)
    }
    if (game.isGameOver()) {
        render.renderGameOver(2)
    }

});

