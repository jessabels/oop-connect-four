import Column from "./column.js";

// Manages state
class Game {
  constructor(playerOneName, playerTwoName) {
    this.playerOneName = playerOneName;
    this.playerTwoName = playerTwoName;
    this.trackPlayer = 1;
    this.columns = [];
    for (let i = 0; i < 7; i++){
        this.columns.push(new Column());
    }
  }

  getName() {
    return `${this.playerOneName} vs ${this.playerTwoName}`;
  }

  playInColumn(columnObjIndex) {
    let columnObj = this.columns[columnObjIndex];
    columnObj.add(this.trackPlayer);

    if (this.trackPlayer === 1) {
        this.trackPlayer = 2;
    } else {
        this.trackPlayer = 1;
    }
  }

  isColumnFull(columnObjIndex){
    let columnObj = this.columns[columnObjIndex];
    console.log(columnObj);
    console.log(columnObj.isFull());
    return columnObj.isFull();
  }

  getTokenAt(rowIndex, columnObjIndex) {
    let columnObj = this.columns[columnObjIndex];
    return columnObj.getTokenAt(rowIndex);
  }
}

export default Game;
