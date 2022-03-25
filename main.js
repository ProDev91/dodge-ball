$(document).ready(startGame)

var player = null;

function startGame() {
    gameArea.start()
    player = new playerToken()
}

const gameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 400;
        this.canvas.height = 400;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

class playerToken {
    constructor() {
        this.width = 30;
        this.height = 30;
        this.speedX = 0;
        this.speedY = 0;
        this.x = 50;
        this.y = 50;

        this.movePlayer = function() {
            this.x += this.speedX;
            this.y += this.speedY;
          }

        this.update = function(){
            let ctx = gameArea.context;
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, this.width, this.height);
          }
    }
}


function updateGameArea() {
    gameArea.clear();
    player.movePlayer();
    player.update();
  }