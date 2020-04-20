import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { keyframes } from '@emotion/core';

const appear = keyframes`
from {
    display: none
}

to {
    display:block
}
`;

let CellGridContainer = styled.div `${tw`flex flex-wrap`};
width: 300px;
height: 300px;
background: transparent;
transition:all .3s cubic-bezier(.35,0,.25,1);
animation: ${appear} 1s linear`;

export { CellGridContainer }