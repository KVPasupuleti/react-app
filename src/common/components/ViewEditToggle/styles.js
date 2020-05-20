import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const ViewEditToggleContainer = styled.div`${tw`flex flex-col bg-gray-300 items-center px-2 py-4`}`

const Header = styled.h2`${tw`text-xl font-bold`}`

const BodyTrueContainer = styled.div`${tw``}`

const BodyFalseContainer = styled.div`${tw``}`

const UserInputEL = styled.input`${tw`border border-2 border-blue-500`}`

const CancelButton = styled.button`${tw`bg-blue-500 text-white px-2 py-1 mx-2 rounded`}`

const EditButton = styled.button`${tw`bg-blue-500 text-white px-2 py-1 mx-2 rounded`}`

const InstructionText = styled.span`${tw``}`

export { ViewEditToggleContainer, Header, BodyTrueContainer, BodyFalseContainer, UserInputEL, CancelButton, EditButton, InstructionText }