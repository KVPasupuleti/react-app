import { observable, action, toJS } from "mobx"
import Cell from "../../components/GridMemoryGame/Cell"

class CellStore {
    level = 0
    topLevel = 0
    currentLevelGridCells = []
    selectedCellsCount = 0
    isGameCompleted = false

    onCellClick(clickedCellId) {
        let clickedCell = this.currentLevelGridCells.filter(eachCell => eachCell.props.id === clickedCellId)  
        console.log(clickedCell[0].props.isHidden) 
        
        if(clickedCell[0].props.isHidden === true) { 
            this.incrementSelectedCellsCount()  
        }   
        else {
            alert(1)
            this.resetGame()
        }
    }

    setGridCells() {
        let n = this.level + 3
        let noOfGridCells = n * n
        const gridCellsArray = []
        const randomArray = []
        
        
        while(n>0) {
            let newNumber = Math.floor(Math.random() * noOfGridCells)
            if(randomArray.indexOf(newNumber) === -1) {
                randomArray.push(newNumber)
                n--
            }
        }
        console.log(randomArray)

        while(noOfGridCells-1>=0) {
            const cellObject = {
                id :  Math.floor(Math.random() * 10000),
                isHidden : randomArray.indexOf(noOfGridCells) !== -1 ? true : false
            }
            console.log(cellObject)
            let newCell = new Cell(cellObject)
            //  console.log(newCell)
            gridCellsArray.push(newCell)
            noOfGridCells--
        }
        this.currentLevelGridCells = gridCellsArray
    }

    goToNextLevelAndUpdateCells() {
        this.level++
        this.setGridCells()
    }
    
    goToInitialLevelAndUpdateCells() {
        this.level = 0
        this.setGridCells()
    }

    resetSelectedCellsCount() {
        this.selectedCellsCount = 0
    }

    incrementSelectedCellsCount() {
        this.selectedCellsCount++
        if(this.selectedCellsCount === this.level + 3) {
            alert("won")
            this.goToNextLevelAndUpdateCells()
        }
    }

    onPlayAgainClick() {
        this.resetGame()
    }

    resetGame() {
        this.setTopLevel()
        this.resetSelectedCellsCount()
        this.goToInitialLevelAndUpdateCells()
    }

    setTopLevel() {
        this.topLevel = this.level > this.topLevel ? this.level : this.topLevel
    }
}



const cellStore = new CellStore

export default cellStore