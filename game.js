import Column from "./column.js";
import ColumnWinInspector from "./column-win-inspector.js";
import RowWinInspector from "./row-win-inspector.js";

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
    } else if (this.winnerNumber === 1) {
      return `${this.playerOneName} wins!`;
    } else if (this.winnerNumber === 2) {
      return `${this.playerTwoName} wins!`;
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
    let columnWinInspect = new ColumnWinInspector(columnObj);
    if (columnWinInspect.inspect() === 1) {
      this.winnerNumber = 1;
    } else if (columnWinInspect.inspect() === 2) {
      this.winnerNumber = 2;
    }

    this.checkForRowWin();
  }

  checkForRowWin() {
    let rowWinInspector1 = new RowWinInspector(this.columns.slice(0, 4));
    let rowWinInspector2 = new RowWinInspector(this.columns.slice(1, 5));
    let rowWinInspector3 = new RowWinInspector(this.columns.slice(2, 6));
    let rowWinInspector4 = new RowWinInspector(this.columns.slice(3, 7));

    let rowWinner1 = rowWinInspector1.inspect();
    let rowWinner2 = rowWinInspector2.inspect();
    let rowWinner3 = rowWinInspector3.inspect();
    let rowWinner4 = rowWinInspector4.inspect();

    if (
      rowWinner1 === 1 ||
      rowWinner2 === 1 ||
      rowWinner3 === 1 ||
      rowWinner4 === 1
    ) {
      this.winnerNumber = 1;
    } else if (
      rowWinner1 === 2 ||
      rowWinner2 === 2 ||
      rowWinner3 === 2 ||
      rowWinner4 === 2
    ) {
      this.winnerNumber = 2;
    }
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
    if (this.winnerNumber === 1 || this.winnerNumber === 2) {
      return true;
    }
    let columnObj = this.columns[columnObjIndex];
    return columnObj.isFull();
  }

  getTokenAt(rowIndex, columnObjIndex) {
    let columnObj = this.columns[columnObjIndex];
    return columnObj.getTokenAt(rowIndex);
  }
}

export default Game;
