import styled from "@emotion/styled";
import tw from 'tailwind.macro';

const PaginationContainer = styled.div`${tw`flex items-center absolute bottom-0`};
right: 200px;`

const PreviousPageButton = styled.button`${tw`text-white bg-black text-xl px-2 py-1 mr-2`};
background-color: ${props=>props.disabled?"grey":"black"};
cursor: ${props=>props.disabled?"not-allowed":"pointer"}`
const PageNumberContainer = styled.div`${tw``}`
const CurrentPageNumber = styled.span`${tw`border border-1 border-black mx-1 px-2 py-1`}`
const PageNumberSeperator = styled.span`${tw`mx-2`}`
const TotalPages = styled.span`${tw`mx-1`}`
const NextPageButton = styled.button`${tw`text-white bg-black text-xl px-2 py-1 ml-2`};
background-color: ${props=>props.disabled?"grey":"black"};
cursor: ${props=>props.disabled?"not-allowed":"pointer"}`

export { PaginationContainer, PreviousPageButton, PageNumberContainer, CurrentPageNumber, PageNumberSeperator, TotalPages, NextPageButton }
