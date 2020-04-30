import styled from "@emotion/styled"
import tw from 'tailwind.macro'

const SizeButtonStyles = styled.button`${tw`rounded-full h-10 w-10 m-1 focus:outline-none bg-gray-200 text-black`};
border:${(props)=>props.isSelected?"1px solid black":"none"}`;

export { SizeButtonStyles }
