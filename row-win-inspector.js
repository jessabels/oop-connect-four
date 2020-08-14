class RowWinInspector {
  constructor(columns) {
    this.columns = columns;
  }
  inspect() {
    for (let j = 0; j < this.columns[0].column.length; j++) {
      if (
        this.columns[0].column[j - 1] !== "" &&
        this.columns[0].column[j] === this.columns[1].column[j] &&
        this.columns[1].column[j] === this.columns[2].column[j] &&
        this.columns[2].column[j] === this.columns[3].column[j] &&
        this.columns[3].column[j] !== ""
      ) {
        return this.columns[0].column[j];
      }
    }

    return 0;
  }
}

export default RowWinInspector;
