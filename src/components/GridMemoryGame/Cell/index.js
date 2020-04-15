import React, { Component } from 'react';
import cellStore from '../../../stores/CellStore';

class Cell extends Component {

    onCellClick = () => {
        const { eachCell } = this.props
        cellStore.onCellClick(eachCell.props.id)
    }

    render() {
        return(
            <div>
                <button onClick={this.onCellClick} style={{ border: '3px solid green' , margin: "10px"}}>Cell Button</button>
            </div>
        )
    }
}

export default Cell;