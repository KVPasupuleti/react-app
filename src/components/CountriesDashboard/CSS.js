import styled from '@emotion/styled';
import tw from 'tailwind.macro';

let CountriesContainer = styled.div `${tw`flex flex-col items-center border-solid 
border-2 border-blue-600 w-screen`}`;

let Paragraph = styled.p `${tw`text-red-400 border-solid border-4 
border-black bg-indigo-200`}`;

let CountriesStyles = styled.div `${tw`flex flex-wrap justify-around w-screen`}`;

let CardImage = styled.div `${tw`h-2/5 w-17/10`}`;

let CardContent = styled.div `${tw`flex flex-col justify-around items-start flex-wrap font-sans w-full text-base h-48 p-5`}`;

let FlagImage = styled.img `${`h-48 w-full `}`;

let CountriesFilterBarStyles = styled.div `${`border-4 border-black bg-orange-200`}`;

let Para = styled.p `${`text-blue-200`}`;

export { CountriesContainer, Paragraph, CountriesStyles, CardImage, CardContent, FlagImage, CountriesFilterBarStyles, Para };