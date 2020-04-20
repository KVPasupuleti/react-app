import styled from "@emotion/styled";
import tw from 'tailwind.macro';

let GameResultContainer = styled.div`${tw`flex flex-col items-center justify-between text-4xl font-medium`}`;

let LevelText = styled.span`${tw`text-6xl text-red-100 font-bold`}`;

let CongratsMessage = styled.p`${tw`text-green-400 text-3xl font-bold`}`;

let PlayAgainButton = styled.button`${tw`bg-blue-300 text-xl`}`;

export { GameResultContainer, LevelText, CongratsMessage, PlayAgainButton };