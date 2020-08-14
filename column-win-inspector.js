class ColumnWinInspector{
    constructor(column){
        this.column = column;
    }
    inspect(){
        let searchColumn = this.column.column;
        for (let i = 0; i < searchColumn.length; i++){
            if (searchColumn[i] === searchColumn[i + 1]
                && searchColumn[i + 1] === searchColumn[i + 2]
                && searchColumn[i + 2] === searchColumn[i + 3]
                && searchColumn[i + 3] !== ""){
                    console.log("winner winner chicken dinner");
                }
        }
    }
}




export default ColumnWinInspector;
