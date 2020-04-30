import React, { Component } from 'react';
import CellModel from '../../../stores/models/Cell';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { CellButton } from './styles';
import { withRouter, RouteComponentProps } from 'react-router-dom';


interface CellProps extends RouteComponentProps {
    eachCell: CellModel
    width: number
    level: number
    selectedTheme: string
    onCellClick: (cellId: number) => void
}

@observer
class Cell extends Component<CellProps> {

    @observable shouldShowHiddenCells = true
    @observable isClickedOnCell = false

    componentDidMount = () => {
        const { level } = this.props
        setTimeout(() => this.shouldShowHiddenCells = false, (level + 3) * 1000);
    }

    @action.bound
    onCellClick() {       
        const { eachCell, onCellClick } = this.props
        this.isClickedOnCell = true
        onCellClick(eachCell.id)
        if(eachCell.isHidden === false) {
            this.props.history.replace('/login-page');
        }
    }

    render() {
        const { isHidden } = this.props.eachCell
        const { width, selectedTheme, level } = this.props
        return(
                <CellButton onClick={this.onCellClick} isHidden={isHidden}
                isClickedOnCell={this.isClickedOnCell} selectedTheme={selectedTheme}
                shouldShowHiddenCells={this.shouldShowHiddenCells} width={width} level={level}
                disabled={this.shouldShowHiddenCells || this.isClickedOnCell}></CellButton>
        )
    }
}

export default withRouter(Cell);