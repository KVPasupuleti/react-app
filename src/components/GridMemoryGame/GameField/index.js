import React, { Component } from 'react';
import Cell from '../Cell';
import cellStore from '../../../stores/CellStore';
import { observer } from 'mobx-react';


class GameField extends Component {

    renderCells = () => {
        cellStore.setGridCells()
        return cellStore.currentLevelGridCells.map(eachCell =>  <Cell key={eachCell.props.id} eachCell={eachCell}/>)
    }

    render() {
        return(
            <div>
                {this.renderCells()}
            </div>
        )
    }
}



export default GameField;