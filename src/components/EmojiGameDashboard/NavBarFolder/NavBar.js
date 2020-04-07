import React from 'react';
import {
    NavBarContainer,
    GameTitle,
    ScoreText,
    TopScoreText,
    ThemeButton,
    ScoresContainer
}
from './navBarStyles.js';

class NavBar extends React.Component {

    onChangeTheme = () => {
        const { selectedTheme, onChangeTheme } = this.props;
        const themeOption = selectedTheme.name === "emojiGameLight" ? "emojiGameDark" : "emojiGameLight";
        onChangeTheme(themeOption);
    }

    render() {
        const { score, topScore, selectedTheme } = this.props;
        console.log(selectedTheme);
        return (
            <NavBarContainer>
                
                <GameTitle selectedTheme={selectedTheme}>Emoji Game</GameTitle>
                
                <ScoresContainer>
                    <ScoreText>Score: {score}</ScoreText>
                    <TopScoreText>Top Score: {topScore}</TopScoreText>
                    <ThemeButton onClick={this.onChangeTheme}>THEME</ThemeButton>
                </ScoresContainer>
            
            </NavBarContainer>
        );
    }
}

export default NavBar;
