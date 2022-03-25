$(document).ready(startGame)

function startGame() {
    gameArea.start()
}

const gameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 400;
        this.canvas.height = 400;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}