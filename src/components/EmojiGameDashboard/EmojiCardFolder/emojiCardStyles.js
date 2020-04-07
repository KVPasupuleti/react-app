import styled from '@emotion/styled';
import tw from 'tailwind.macro';

let EmojiCardButton = styled.button `${tw`border-transparent border-1 my-10 mx-5
bg-white shadow-custom h-64 w-64 flex-col items-center justify-center`}
background:${props => props.selectedTheme.cardColor};
color:${props => props.selectedTheme.textColor}
`;

let EmojiImage = styled.img `${tw`h-48`}`;

let EmojiName = styled.span `${``}`;

export { EmojiCardButton, EmojiImage, EmojiName };
