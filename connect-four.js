window.addEventListener("DOMContentLoaded", () => {
    const playerOneName = document.getElementById("player-1-name");
    const playerTwoName = document.getElementById("player-2-name");
    const newGame = document.getElementById("new-game");
    const formHolder = document.getElementById("form-holder");
    const boardHolder = document.getElementById("board-holder");
    const gameName = document.getElementById("game-name");
    let game = undefined;

    function updateUI() {
        if (game === undefined){
            boardHolder.classList.add("is-invisible");
            console.log(game);
        } else {
            boardHolder.classList.remove("is-invisible");
            console.log(game);
            gameName.innerHTML = Game.getName();
        }
    }

    formHolder.addEventListener("keyup", event => {
        if (playerOneName.value !== "" && playerTwoName.value !== ""){
            newGame.disabled = false;
        } else {
            newGame.disabled = true;

        }
    });

    newGame.addEventListener("click", event => {
        game = new Game(playerOneName.value, playerTwoName.value);
        playerOneName.value = "";
        playerTwoName.value = "";
        newGame.disabled = true;
        updateUI();
    });




});
