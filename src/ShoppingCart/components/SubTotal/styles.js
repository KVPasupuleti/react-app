import styled from "@emotion/styled"
import tw from 'tailwind.macro'

let SubTotalContainer = styled.div`${tw`flex justify-between mt-4`}`

let SubTotalText = styled.h3`${tw`text-gray-500`}`

let TotalCartAmount = styled.p`${tw`text-yellow-600`}`

export { SubTotalContainer, SubTotalText, TotalCartAmount }