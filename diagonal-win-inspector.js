class DiagonalWinInspector{
    constructor(columns){
        this.columns = columns;
    }
    inspectLeftDiagonal(){
        for (let i = 0; i < this.columns[0].column.length; i++) {
            if (this.columns[0].column[i] === this.columns[1].column[i + 1]
                && this.columns[1].column[i + 1] === this.columns[2].column[i + 2]
                && this.columns[2].column[i + 2] === this.columns[3].column[i + 3]
                && this.columns[3].column[i + 3] !== ""
            ){
                return this.columns[0].column[i];
            }
        }
    }
    inspectRightDiagonal(){
        for (let i = 0; i < this.columns[0].column.length; i++) {
            if (this.columns[3].column[i] === this.columns[2].column[i + 1]
                && this.columns[2].column[i + 1] === this.columns[1].column[i + 2]
                && this.columns[1].column[i + 2] === this.columns[0].column[i + 3]
                && this.columns[0].column[i + 3] !== ""
            ){
                return this.columns[3].column[i];
            }
        }
    }
}

export default DiagonalWinInspector;
