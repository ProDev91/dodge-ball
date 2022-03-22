$(document).ready(initApp);

function initApp() {
    $(document).on("keydown", movePlayer);
    // setInterval(function () {
        spawnBalls()
    // }, 50000)
    moveBall()
    // checkIfHit()
    checkPositions()
}

let level = 1;
let playerSpeed = 30;
let moveUpKeys = { key: 87, arrow: 38 };
let moveRightKeys = { key: 68, arrow: 39 };
let moveDownKeys = { key: 83, arrow: 40 };
let moveLeftKeys = { key: 65, arrow: 37 };

function movePlayer(event) {
    let currentKeyPressed = event.which
    console.log(currentKeyPressed)
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

    const interval = setInterval(function() {
        console.log($(newBall).find())
        // console.log($(newBall).position())
        clearInterval(interval)
    })

    setTimeout(function () {
        moveBall(newBall)
    }, 1000)

}

function moveBall(newBall) {
    $(newBall).animate({left: '100%'}, 10000, "linear")
    $(newBall).queue(function() {
        $(this).remove()
    })
}

function checkPositions() {

}

function checkIfHit() {
    console.log($('.player').position())
    console.log($('.ball').position())
    if ($('.player').position()) { }
}
