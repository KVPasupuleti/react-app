import React from 'react';
import EmojiCard from '../EmojiCardFolder/EmojiCard';
import NavBar from '../NavBarFolder/NavBar';
import HowToPlay from '../HowToPlayFolder/HowToPlay';
import WinOrLose from '../WinOrLoseFolder/WinOrLose';
import { EmojiCardsContainer } from './emojiGameStyles.js';

class EmojiGame extends React.Component {
    state = {
        emojis: [{ id: 0, isClicked: false, name: "Exploding Head", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png" },
            { id: 1, isClicked: false, name: "Grinning Face with Sweat", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png" },
            { id: 2, isClicked: false, name: "Smiling Face with Heart-Eyes", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png" },
            { id: 3, isClicked: false, name: "Smirking Face", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png" },
            { id: 4, isClicked: false, name: "Thinking Face", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png" },
            { id: 5, isClicked: false, name: "Winking Face", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png" },
            { id: 6, isClicked: false, name: "Grinning Face", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png" },
            { id: 7, isClicked: false, name: "Crying Face", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png" },
            { id: 8, isClicked: false, name: "Astonished Face", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png" },
            { id: 9, isClicked: false, name: "Face with Tears of Joy", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png" },
            { id: 10, isClicked: false, name: "Star Stuck", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png" },
            { id: 11, isClicked: false, name: "Winking Face with Tongue", image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png" }
        ],
        score: 0,
        topScore: 0,
        gameState: "PLAYING"
    }

    renderEmojicards = () => {
        const { emojis } = this.state;
        const { selectedTheme } = this.props;
        const emojiCards = emojis.map((emoji, index) => {
            return <EmojiCard key={index} emoji={emoji}
            onEmojiClick={this.onEmojiClick} selectedTheme={selectedTheme}/>;
        });
        return emojiCards;
    }

    onEmojiClick = (clickedEmoji) => {
        let { emojis, gameState } = this.state;

        if (clickedEmoji.isClicked === true) {
            this.setState({ gameState: "LOST" });
        }
        else {
            emojis.forEach(eachEmoji => {
                if (eachEmoji.id === clickedEmoji.id)
                    eachEmoji.isClicked = true;
            });
            let shuffledEmojis = this.shuffleEmojis(emojis);
            let newScore = this.incrementScore();

            if (newScore === 12)
                gameState = "WON";

            this.setState({ emojis: shuffledEmojis, score: newScore, gameState: gameState });
        }
    }

    renderWinOrLose = () => {
        const { score, gameState } = this.state;
        const isWon = gameState === "WON" ? true : false;
        const body = <WinOrLose score={score} onClickPlayAgain={this.onClickPlayAgain} isWon={isWon}/>;
        return body;
    }

    shuffleEmojis = (emojis) => {
        emojis.sort(() => Math.random() - 0.5);
        return emojis;
    }

    incrementScore = () => {
        const { score } = this.state;
        return score + 1;
    }

    onClickPlayAgain = () => {
        const topScore = this.setTopScore();
        const resetArray = this.resetGame();
        this.setState({ score: 0, topScore: topScore, array: resetArray, gameState: "PLAYING" });
    }

    compare = (a, b) => {
        const idA = a.id;
        const idB = b.id;

        let comparison = 0;
        if (idA > idB)
            comparison = 1;
        else
            comparison = -1;
        return comparison;
    }

    resetGame = () => {
        let { emojis, gameState } = this.state;

        if (gameState === "WON")
            emojis = emojis.sort(this.compare);
        else
            emojis = this.shuffleEmojis(emojis);

        emojis.forEach(eachEmoji => eachEmoji.isClicked = false);
        return emojis;
    }

    setTopScore = () => {
        const { score, topScore } = this.state;
        if (topScore < score)
            return score;
        else
            return topScore;
    }

    onChangeTheme = (themeOption) => {
        const { onChangeTheme } = this.props;
        onChangeTheme(themeOption);
    }

    render() {
        const { selectedTheme } = this.props;
        const { score, topScore, gameState } = this.state;
        return (
            <div>
            <NavBar selectedTheme={selectedTheme} onChangeTheme={this.onChangeTheme}
            score={score} topScore={topScore}/>
            <EmojiCardsContainer>{gameState === "PLAYING"?this.renderEmojicards():this.renderWinOrLose()}</EmojiCardsContainer>
            <HowToPlay/>
            </div>
        );
    }
}

export default EmojiGame;
