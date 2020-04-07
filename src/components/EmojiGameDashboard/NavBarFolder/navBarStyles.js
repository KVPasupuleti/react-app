import styled from '@emotion/styled';
import tw from 'tailwind.macro';



let NavBarContainer = styled.div `${tw`h-20  border-2 border-black 
flex items-center`}
`;

let GameTitle = styled.span `${tw`text-3xl w-2/3 border border-red-200 ml-4`}
color:${props => props.selectedTheme.textColor};
background:${props => props.selectedTheme.emojiBackgroundColor}
`;

let ScoreText = styled.span `${tw`font-semibold`}`;

let TopScoreText = styled.span `${tw`font-semibold`}`;

let ThemeButton = styled.button `${tw`border border-black h-10 p-2`}`;

let ScoresContainer = styled.div `${tw`border border-black w-1/3 flex justify-between items-center mr-4`}`;


export {
    NavBarContainer,
    GameTitle,
    ScoreText,
    TopScoreText,
    ThemeButton,
    ScoresContainer
};
