import React from 'react';
import { WinOrLoseContainer, FinalScore, WinOrLoseText, PlayAgainButton } from './winOrLoseStyles.js';

class WinOrLose extends React.Component {

    onClickPlayAgain = () => {
        const { onClickPlayAgain } = this.props;
        onClickPlayAgain();
    }

    render() {
        const { score, isWon } = this.props;
        return (
            <WinOrLoseContainer>
                <FinalScore>{score}</FinalScore>
                <WinOrLoseText>{isWon === true?"You Won":"You Lose!"}</WinOrLoseText>
                <PlayAgainButton onClick={this.onClickPlayAgain}>Play Again</PlayAgainButton>
            </WinOrLoseContainer>
        );
    }
}

export default WinOrLose;
