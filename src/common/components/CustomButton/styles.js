import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const ButtonEl = styled.button`${tw`bg-blue-500 rounded text-white px-2 py-3 text-xl`}; &
:hover {
    color: red;
};`

export { ButtonEl }