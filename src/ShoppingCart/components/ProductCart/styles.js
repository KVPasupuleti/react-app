import styled from "@emotion/styled"
import tw from 'tailwind.macro'
import { keyframes } from "@emotion/core"

let ProductCartContainer = styled.div`${tw`fixed top-0 right-0 z-10`}`

const changePosition = keyframes`
from {
    right: 0px
}

to {
    right: 400px
}
`   

let CrossButton = styled.button`${tw`h-10 p-3 text-white bg-gray-800 focus:outline-none active:outline-none leading-none absolute`};
right: ${(props) => props.shouldDisplayCart? "400px":"0px"};
height: ${(props) => props.shouldDisplayCart?"40px":"80px"};
animation: ${changePosition} 3s`

let CartDashboardContainer = styled.div`${tw`flex relative h-screen`}`

let CartHeader = styled.div`${tw`flex items-center justify-center border border-red-300`}`

let CartSymbolContainer = styled.div`${tw`h-10 mr-4 flex flex-col items-center justify-center text-white`};
`

let CartSymbol = styled.span`${tw``}`

let CartImage = styled.svg`${tw``};
width: 40px;
height: 40px;
viewBox: 0 0 24 24;
fill: none;
stroke: white;
stroke-width: 2px;
stroke-linecap: round;
stroke-linejoin: round`

let Circle1 = styled.circle`${tw``};
cx: 9;
cy: 21:
r: 1`

let Circle2 = styled.circle`${tw``};
cx: 20;
cy: 21;
r: 1`

let CartHeadingText = styled.h2`${tw`text-white font-bold text-xl`}`

const appearance = keyframes`
from {
    width: 0px
}

to {
    width: 400px
}
`   

let CartBody = styled.div`${tw`p-4 bg-gray-800 flex flex-col border border-orange-400`};
display: ${(props) => props.shouldDisplayCart?"flex":"none"};
width: ${(props) => props.shouldDisplayCart?"400px":"0px"};
animation: ${appearance} 0.3s`

let CartFooter = styled.div`${tw`absolute bottom-0 right-0 p-4 bg-gray-800 shadow-inner w-full`}`

export { ProductCartContainer, CrossButton, CartDashboardContainer, CartHeader,
    CartSymbolContainer, CartSymbol, CartImage, Circle1, Circle2, CartHeadingText, CartBody, CartFooter }