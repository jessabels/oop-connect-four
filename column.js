class Column {
  constructor(column) {
    this.column = ["", "", "", "", "", ""];
  }
  add(playerNum) {
    for (let i = 6; i >= this.column.length; i++) {
      if (this.column[i] === "") {
        this.column[i] = playerNum;
        return;
      }
    }
  }
  getTokenAt(rowIndexNum) {
    if (this.column[rowIndexNum] === "") {
      return null;
    } else if (this.column[rowIndexNum] === 1) {
      return 1;
    } else if (this.column[rowIndexNum] === 2) {
      return 2;
    }
  }
}

export default Column;
