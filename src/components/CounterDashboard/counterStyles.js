import styled from '@emotion/styled';
import tw from 'tailwind.macro';

let CounterContainer = styled.div `${tw`flex flex-col justify-center items-center bg-white w-screen h-screen`}`;

let Header = styled.span `${tw`text-3xl font-semibold`}`;

let ButtonsContainer = styled.div `${tw`flex justify-center items-center`}`;

let IncrementButton = styled.button `${tw`bg-blue-700 text-white h-12 w-12 rounded font-semibold`}`;

let DecrementButton = styled.button `${tw`bg-blue-700 text-white h-12 w-12 rounded font-semibold`}`;

let CountText = styled('input')
`${tw`w-32 rounded border-2 border-orange-400 text-xl h-12 mx-4 font-semibold`}`;

export { Header, ButtonsContainer, CounterContainer, IncrementButton, DecrementButton, CountText };
