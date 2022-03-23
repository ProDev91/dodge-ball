$(document).ready(initApp);

function initApp() {
    $(document).on("keydown", movePlayer);
    createPlayer()
    // setInterval(function () {
    spawnBalls()
    // }, 1000)
}

let level = 1;
let playerSpeed = 30;
let moveUpKeys = { key: 87, arrow: 38 };
let moveRightKeys = { key: 68, arrow: 39 };
let moveDownKeys = { key: 83, arrow: 40 };
let moveLeftKeys = { key: 65, arrow: 37 };

function createPlayer() {
    var player = $("#player");
    var ctx = player[0].getContext('2d');
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 30, 30);
    console.log(ctx)
}

function movePlayer(event) {
    let currentKeyPressed = event.which

    if (currentKeyPressed == moveUpKeys.key || currentKeyPressed == moveUpKeys.arrow) {
        moveUp();
    }

    if (currentKeyPressed == moveRightKeys.key || currentKeyPressed == moveRightKeys.arrow) {
        moveRight();
    }

    if (currentKeyPressed == moveDownKeys.key || currentKeyPressed == moveDownKeys.arrow) {
        moveDown();
    }

    if (currentKeyPressed == moveLeftKeys.key || currentKeyPressed == moveLeftKeys.arrow) {
        moveLeft();
    }
}

function moveUp() {
    let currentPosition = $(".player").position().top;
    let newPosition = currentPosition - playerSpeed;
    $(".player").css("top", newPosition);
}

function moveRight() {
    let currentPosition = $(".player").position().left;
    let newPosition = currentPosition + playerSpeed;
    $(".player").css("left", newPosition);
}

function moveDown() {
    let currentPosition = $(".player").position().top;
    let newPosition = currentPosition + playerSpeed;
    $(".player").css("top", newPosition);
}

function moveLeft() {
    let currentPosition = $(".player").position().left;
    let newPosition = currentPosition - playerSpeed;
    $(".player").css("left", newPosition);
}

function spawnBalls() {
    let newBall = $('<div>').addClass('ball')
    let randomVerticalNumber = Math.floor(Math.random() * 101);
    let randomHorizontalNumber = '0%'
    $('#board').append(newBall)
    $(newBall).css({
        'left': randomHorizontalNumber,
        'top': `${randomVerticalNumber}%`
    })

    moveBall(newBall)
    checkPositions(newBall)

}

function moveBall(newBall) {
    $(newBall).animate({ left: '100%' }, 1000, "linear")
    $(newBall).queue(function () {
        $(this).remove()
    })
}

function checkPositions(ball) {
    setTimeout(function() {
        const interval = setInterval(function () {
            let ballPosition = $(ball).position()
            checkIfHit(ballPosition)
            if (ballPosition.left == 0) {
                clearInterval(interval)
            }
        })
    }, 100)
}

function checkIfHit(ballPosition) {
    let playerPosition = $('.player').position()
    let playerHeight = $('.player').height()
    let playerWidth = $('.player').width()
    let playerTop = playerPosition.top
    let playerLeft = playerPosition.left
    let playerBottom = playerTop + playerHeight
    let playerRight = playerLeft + playerWidth

    let ballHeight = $('.ball').height()
    let ballWidth = $('.ball').width()
    let ballTop = ballPosition.top
    let ballLeft = ballPosition.left
    let ballBottom = ballTop + ballHeight
    let ballRight = ballLeft + ballWidth

    if(playerRight >= ballLeft && playerLeft <= ballRight && playerBottom >= ballTop && playerTop <= ballBottom) {
        $('.player').addClass('goodbye')
    }
}
