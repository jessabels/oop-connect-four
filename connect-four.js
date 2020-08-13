import Game from "./game.js";

window.addEventListener("DOMContentLoaded", () => {
  const playerOneName = document.getElementById("player-1-name");
  const playerTwoName = document.getElementById("player-2-name");
  const newGame = document.getElementById("new-game");
  const formHolder = document.getElementById("form-holder");
  const boardHolder = document.getElementById("board-holder");
  const gameName = document.getElementById("game-name");
  const clickTargets = document.getElementById("click-targets");
  let game = undefined;

  function updateUI() {
    if (game === undefined) {
      boardHolder.classList.add("is-invisible");
    } else {
      boardHolder.classList.remove("is-invisible");
      gameName.innerHTML = game.getName();
      if (game.trackPlayer === 1) {
        clickTargets.classList.remove("black");
        clickTargets.classList.add("red");
      } else {
        clickTargets.classList.remove("red");
        clickTargets.classList.add("black");
      }
    }
  }

  formHolder.addEventListener("keyup", (event) => {
    if (playerOneName.value !== "" && playerTwoName.value !== "") {
      newGame.disabled = false;
    } else {
      newGame.disabled = true;
    }
  });

  newGame.addEventListener("click", (event) => {
    game = new Game(playerOneName.value, playerTwoName.value);
    playerOneName.value = "";
    playerTwoName.value = "";
    newGame.disabled = true;
    updateUI();
  });

  clickTargets.addEventListener("click", (event) => {
    game.playInColumn();
    updateUI();
  });
});
