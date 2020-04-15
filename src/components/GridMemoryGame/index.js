import React, { Component } from 'react';
import GameField from './GameField';
import Header from './Header';

class GridMemoryGame extends Component {
    render() {
        return(
            <div>
                <Header/>
                <GameField/>
            </div>
        )
    }
}

export default GridMemoryGame;