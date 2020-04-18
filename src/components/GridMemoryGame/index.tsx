import React, { Component } from 'react';
import GameField from './GameField';
import Header from './Header';
import themeStore from '../../stores/themeStore';
import cellStore from '../../stores/CellStore';
import { observer, Provider  } from 'mobx-react';
import GameResult from './GameResult';
import { GameContainer } from './styles';

@observer
class GridMemoryGame extends Component {

    constructor(props) {
        super(props)
        const { setGridCells } = cellStore
        setGridCells()
    }

    onChangeSelectedTheme = (themeOption: string) => {
        const { onChangeSelectedTheme } = themeStore
        onChangeSelectedTheme(themeOption)
    }

    onClickPlayAgain = () => {
        const { onPlayAgainClick } = cellStore 
        onPlayAgainClick()
    }

    render() {
        const { selectedTheme, themeObject } = themeStore;
        const { level, topLevel } = cellStore;
        return(
            <GameContainer selectedTheme={selectedTheme}>
                <Header onChangeSelectedTheme={this.onChangeSelectedTheme} selectedTheme={selectedTheme} level={level} topLevel={topLevel}/>
                {cellStore.isGameCompleted === false?<GameField selectedTheme={selectedTheme}/>:<GameResult level={level} onClickPlayAgain={this.onClickPlayAgain} selectedTheme={selectedTheme}/>}
            </GameContainer>
        )
    }
}

export default GridMemoryGame;