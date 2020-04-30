import styled from '@emotion/styled'    
import tw from 'tailwind.macro'

let CartItemContainer = styled.div`${tw`flex text-sm my-2 items-center relative`}`

let CartItemCrossButton = styled.button`${tw`font-bold absolute top-0 right-0`}`

let CartItemImage = styled.img`${tw`w-12 object-contain`}`

let CartItemBodyText = styled.div`${tw`ml-2 flex-1`}`

let CartItemTitle = styled.h3`${tw`text-white`}`

let CartItemStyleText = styled.p`${tw`text-gray-500 text-xs`}`

let CartItemQuantityText = styled.p`${tw`text-gray-500 text-xs`}`

let CartItemCost = styled.p`${tw`text-yellow-600 ml-auto`}`

let CartItemSeperationLine = styled.hr`${tw``}`

export { CartItemContainer, CartItemCrossButton, CartItemImage, CartItemBodyText, CartItemTitle, CartItemStyleText, CartItemQuantityText, CartItemCost, CartItemSeperationLine }