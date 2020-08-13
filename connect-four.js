import Game from "./game.js";
import Column from "./column.js";

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
      console.log(game.columns); // Testing columns
      if (game.trackPlayer === 1) {
        clickTargets.classList.remove("black");
        clickTargets.classList.add("red");
      } else {
        clickTargets.classList.remove("red");
        clickTargets.classList.add("black");
      }
      for (let i = 0; i <= 5; i++) {
          for (let j = 0; j <= 6; j++){
            let tokenSquare = document.getElementById(`square-${i}-${j}`);
            let status = game.getTokenAt(i, j)
            tokenSquare.innerHTML = "";
            if (status === 1){
                let newEl = document.createElement("div");
                newEl.classList.add("token", "red");
                tokenSquare.appendChild(newEl);
            } else if (status === 2){
                let newEl = document.createElement("div");
                newEl.classList.add("token", "black");
                tokenSquare.appendChild(newEl);
            } else {
                return;
            }
          }
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
    const currentSquare = event.target.id;
    const columnIndex = Number.parseInt(currentSquare[currentSquare.length - 1]);
    game.playInColumn(columnIndex);
    updateUI();
  });
});
