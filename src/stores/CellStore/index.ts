import { observable, action } from "mobx";
import CellModel from '../models/Cell';
import gridData from '../../components/GridMemoryGame/gridData.json';

type CellProps = {
    id: number
    isHidden: boolean
}

class CellStore {
    @observable level:number = 0
    @observable topLevel:number = 0
    @observable currentLevelGridCells:Array<CellModel> = []
    @observable selectedCellsCount:number = 0
    @observable isGameCompleted:boolean = false

    @action.bound
    onCellClick(clickedCellId: number) {
        let clickedCell = this.currentLevelGridCells.filter(eachCell => eachCell.id === clickedCellId)   
        if(clickedCell[0].isHidden === true)
            setTimeout(() => this.incrementSelectedCellsCount(), 300) 
        else { 
            setTimeout(() => this.resetGame(), 300)
        }
    }

    @action.bound
    setGridCells() {
        const { gridSize, hiddenCellCount } = gridData[this.level]

        const noOfGridCells = (gridSize) * (gridSize)
        const gridCellsArray:Array<CellModel> = []
        const randomNumberArray:Array<number> = []
        let n = hiddenCellCount

        while(n>0) {
            let randomNumber:number = Math.floor(Math.random() * noOfGridCells)
            if(randomNumberArray.indexOf(randomNumber) === -1) {
                randomNumberArray.push(randomNumber)
                n--
            }
        }

        for(let i = 0; i < noOfGridCells; i++) {
            const cellObject: CellProps = {
                id :  Math.floor(Math.random() * 10000),
                isHidden : randomNumberArray.indexOf(i) !== -1 ? true : false
            }
            let newCell = new CellModel(cellObject)
            gridCellsArray.push(newCell)
        }
        this.currentLevelGridCells = gridCellsArray
        }

    @action.bound
    goToNextLevelAndUpdateCells() {
        this.level++
        if(this.level === 7) {
            this.topLevel = this.level
            this.isGameCompleted = true
        }
        else
            this.setGridCells()
    }

    @action.bound
    goToInitialLevelAndUpdateCells() {
        this.level = 0
        this.setGridCells()
    }

    @action.bound
    resetSelectedCellsCount() {
        this.selectedCellsCount = 0
    }

    @action.bound
    incrementSelectedCellsCount() {
        this.selectedCellsCount++
        if(this.selectedCellsCount === this.level + 3) {
            this.selectedCellsCount = 0 
            this.goToNextLevelAndUpdateCells()
        }
    }

    @action.bound
    onPlayAgainClick() {
        this.resetGame()
    }

    @action.bound
    resetGame() {
        this.isGameCompleted = false
        this.setTopLevel()
        this.resetSelectedCellsCount()
        this.goToInitialLevelAndUpdateCells()
    }

    @action.bound
    setTopLevel() {
        this.topLevel = this.level > this.topLevel ? this.level : this.topLevel
    }

}

const cellStore = new CellStore()

export default cellStore