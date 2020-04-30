import styled from "@emotion/styled";
import tw from 'tailwind.macro'

const HeaderContainer = styled.div`${tw`flex justify-between items-center my-4`}`

const TotalItemsText = styled.p`${tw`hidden sm:flex`}`


export { HeaderContainer, TotalItemsText }