// Manages state
class Game {
  constructor(playerOneName, playerTwoName) {
    this.playerOneName = playerOneName;
    this.playerTwoName = playerTwoName;
    this.trackPlayer = 1;
  }

  getName() {
    return `${this.playerOneName} VS ${this.playerTwoName}`;
  }
  playInColumn() {
    if (this.trackPlayer === 1) {
      this.trackPlayer = 2;
    } else {
      this.trackPlayer = 1;
    }
  }
}

export default Game;
