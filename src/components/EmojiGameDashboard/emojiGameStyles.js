import styled from '@emotion/styled';
import tw from 'tailwind.macro';

let EmojiCardsContainer = styled.div `${tw` w-screen bg-yellow-300
flex flex-wrap justify-center border border-orange-800`}`;

let EmojiCardButton = styled.button `${tw`border-transparent border-1 my-10 mx-5
bg-white shadow-custom h-64 w-64 flex-col items-center justify-center`}`;

let EmojiImage = styled.img `${tw`h-48`}`;

let EmojiName = styled.span `${``}`;

let NavBarContainer = styled.div `${tw`h-20 bg-white border-2 border-black 
flex items-center`}`;

let GameTitle = styled.span `${tw`text-3xl w-2/3 border border-red-200 ml-4`}`;

let ScoreText = styled.span `${tw`font-semibold`}`;

let TopScoreText = styled.span `${tw`font-semibold`}`;

let ThemeButton = styled.button `${tw`border border-black h-10 p-2`}`;

let ScoresContainer = styled.div `${tw`border border-black w-1/3 flex justify-between items-center mr-4`}`;

let WinOrLoseContainer = styled.div `${tw`flex flex-col items-center justify-center h-winOrLoseHeight`}`;

let FinalScore = styled.span `${tw`m-2 font-semibold text-4xl`}`;

let WinOrLoseText = styled.span `${tw`text-red-600 m-2 text-4xl font-semibold`}`;

let PlayAgainButton = styled.div `${tw`bg-indigo-600 text-white rounded p-2 m-2 h-12 w-32 text-xl text-center`}`;

let HowToPlayContainer = styled.div `${tw``}`;

let HowToPlayTitle = styled.b `${tw``}`;

let HowToPlayContent = styled.p `${tw``}`;

export {
    EmojiCardButton,
    EmojiImage,
    EmojiName,
    NavBarContainer,
    GameTitle,
    ScoreText,
    TopScoreText,
    ThemeButton,
    EmojiCardsContainer,
    ScoresContainer,
    WinOrLoseContainer,
    FinalScore,
    WinOrLoseText,
    PlayAgainButton,
    HowToPlayContainer,
    HowToPlayTitle,
    HowToPlayContent
};
