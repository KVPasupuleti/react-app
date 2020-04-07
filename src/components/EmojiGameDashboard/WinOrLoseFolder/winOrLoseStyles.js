import styled from '@emotion/styled';
import tw from 'tailwind.macro';


let WinOrLoseContainer = styled.div `${tw`flex flex-col items-center justify-center h-winOrLoseHeight`}`;

let FinalScore = styled.span `${tw`m-2 font-semibold text-4xl`}`;

let WinOrLoseText = styled.span `${tw`text-red-600 m-2 text-4xl font-semibold`}`;

let PlayAgainButton = styled.div `${tw`bg-indigo-600 text-white rounded p-2 m-2 h-12 w-32 text-xl text-center`}`;


export { WinOrLoseContainer, FinalScore, WinOrLoseText, PlayAgainButton };
