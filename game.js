import Column from "./column.js";

// Manages state
class Game {
  constructor(playerOneName, playerTwoName) {
    this.playerOneName = playerOneName;
    this.playerTwoName = playerTwoName;
    this.trackPlayer = 1;
    this.winnerNumber = 0;
    this.columns = [];
    for (let i = 0; i < 7; i++) {
      this.columns.push(new Column());
    }
  }

  getName() {
    if (this.winnerNumber === 0) {
      return `${this.playerOneName} vs ${this.playerTwoName}`;
    } else if (this.winnerNumber === 3) {
      return `${this.playerOneName} ties with ${this.playerTwoName}!`;
    }
  }

  playInColumn(columnObjIndex) {
    let columnObj = this.columns[columnObjIndex];
    columnObj.add(this.trackPlayer);

    if (this.trackPlayer === 1) {
      this.trackPlayer = 2;
    } else {
      this.trackPlayer = 1;
    }
    this.checkForTie();
  }

  checkForTie() {
    let count = 0;

    for (let i = 0; i <= 6; i++) {
      if (this.isColumnFull(i) === true) {
        count++;
      }
    }
    if (count === 7) {
      this.winnerNumber = 3;
    }
  }
  isColumnFull(columnObjIndex) {
    let columnObj = this.columns[columnObjIndex];
    return columnObj.isFull();
  }

  getTokenAt(rowIndex, columnObjIndex) {
    let columnObj = this.columns[columnObjIndex];
    return columnObj.getTokenAt(rowIndex);
  }
}

export default Game;
