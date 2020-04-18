import styled from '@emotion/styled';
import tw from 'tailwind.macro';

type GameContainerProps = {
    selectedTheme: string
}

let GameContainer = styled.div`${tw`flex flex-col justify-center items-center h-screen `};
background: ${(props:GameContainerProps) => props.selectedTheme==="Light"?"white":"#2b302d"};
color: ${(props:GameContainerProps) => props.selectedTheme==="Light"?"black":"white"}`;

export { GameContainer }