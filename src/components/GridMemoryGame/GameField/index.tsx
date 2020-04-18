import React, { Component } from 'react';
import Cell from '../Cell';
import cellStore from '../../../stores/CellStore';
import { observer } from 'mobx-react';
import { reaction } from 'mobx';
import { CellGridContainer } from './styles';
import gridData from '../gridData.json';

type GameFieldProps = {
    selectedTheme: string
}

@observer
class GameField extends Component<GameFieldProps> {

    timerId

    componentWillUnmount() {
        //this.currentCellsUpdateReaction.dispose()
    }

    startTimer = () => {
        const { level } = cellStore
        const { gridSize } = gridData[level]
        this.timerId = setTimeout(() => cellStore.resetGame(), (gridSize) * (gridSize) * 1000 );
    }

    currentCellsUpdateReaction = reaction(() => {
        const { currentLevelGridCells } = cellStore
        return currentLevelGridCells
    }, (currentLevelGridCells) => {
        clearTimeout(this.timerId)
    })

    gameCompletedReaction = reaction(() => {
        const { isGameCompleted } = cellStore
        return isGameCompleted
    }, (isGameCompleted) => {
        if(isGameCompleted) {
            clearTimeout(this.timerId)
        }
    })

    onCellClick = (cellId) => {
        const { onCellClick } = cellStore
        onCellClick(cellId)
    }

    renderCells = () => {
        let level: number = 0
        const { selectedTheme } = this.props
        level = cellStore.level
        const { gridWidth } = gridData[level]
        const gridCells = cellStore.currentLevelGridCells.map(eachCell =>  <Cell key={eachCell.id} eachCell={eachCell} 
            level={level} selectedTheme={selectedTheme} width={gridWidth} onCellClick={this.onCellClick}/>)
        return gridCells
}

    render() {
        this.startTimer()
        return(
            <CellGridContainer>
                {this.renderCells()}
            </CellGridContainer>
        )
    }
}



export default GameField;