import styled from "@emotion/styled";
import tw from 'tailwind.macro';

type ButtonProps = {
    selectedTheme: string
    onClick: () => void
}

let HeaderContainer = styled.div`${tw`flex flex-col items-center justify-around text-xl `};
width: 291px;
height: 130px;`

let LevelAndButtonContainer = styled.div`${tw`flex justify-between items-center`};
width: 290px`

let TopLevelText = styled.p`${tw``}`;

let LevelText = styled.p`${tw``}`;

let ThemeButton = styled.button`${tw`p-1`};
color: ${(props:ButtonProps) => props.selectedTheme==="Light"?"black":"white"};
border: ${(props:ButtonProps) => props.selectedTheme==="Light"?"1px solid black":"1px solid white"}`;

export { HeaderContainer, LevelAndButtonContainer, TopLevelText, LevelText, ThemeButton }