import React, { Component } from 'react';
import { GameResultContainer, CongratsMessage } from './styles';
import { LevelText } from '../Header/styles';
import { PlayAgainButton } from '../../EmojiGameDashboard/emojiGameStyles';

type GameResultProps = {
    onClickPlayAgain : () => void
    selectedTheme : string
    level: number
}

class GameResult extends Component<GameResultProps> {

    onClickPlayAgain = () => {
        const { onClickPlayAgain } = this.props
        onClickPlayAgain()
    }

    render() {
        const { level } = this.props
        return(
            <GameResultContainer>
                <LevelText>{level}</LevelText>
                <CongratsMessage>Congratulations!You completed all the levels</CongratsMessage>
                <PlayAgainButton onClick={this.onClickPlayAgain}>Play Again</PlayAgainButton>
            </GameResultContainer>
        ) 
    }
}

export default GameResult