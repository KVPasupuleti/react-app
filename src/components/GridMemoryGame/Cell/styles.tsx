import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { keyframes } from '@emotion/core';

type CellButtonProps = {
    onClick :() => void
    isHidden: boolean
    shouldShowHiddenCells: boolean
    isClickedOnCell : boolean
    width: number
    level: number
    selectedTheme: string
}


const fadeOut = keyframes`
from {
    opacity:0;
}

to {
    opacity: 1;
}
`;

const scaleIn = keyframes`
from {
    scale(1);
}

to {
    scale(0);
}
`;

// transform: scale(1);
//     opacity: 0;
//     transform: scale(.25);
//     opacity: 1;


let CellButton = styled.button`${tw`border border-1 border-green-100`};
    background : ${(props:CellButtonProps)=>props.selectedTheme==="Light"?(!(props.isClickedOnCell === true && props.isHidden === false)?(props.isHidden===true?(props.shouldShowHiddenCells || props.isClickedOnCell)?"#2c824f":"#444f48":"#444f48"):"red")
    :!(props.isClickedOnCell === true && props.isHidden === false)?(props.isHidden===true?(props.shouldShowHiddenCells || props.isClickedOnCell)?"#5da69c":"#444f48":"#444f48"):"red"};
    width: ${(props:CellButtonProps)=>props.width/(props.level + 3)}px;
    border: ${(props:CellButtonProps)=>props.selectedTheme==="Light"?"4px solid white":"4px solid #2b302d"};
    transition: all 500ms;
    animation: ${fadeOut} 3s linear`;

export { CellButton }
