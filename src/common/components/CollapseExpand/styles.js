import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const CollapseExpandContainer = styled.div`${tw`flex flex-col bg-gray-400 items-center px-2 py-4`}`

const Header = styled.h2`${tw`text-xl font-bold`}`

const BodyContainer = styled.div`${tw`flex`}`

const BodyTrueContainer = styled.div`${tw`flex flex-col`}`

const CollapseButton = styled.button`${tw`bg-blue-500 text-white px-2 py-1 mx-2 rounded`}`

const ExpandButton = styled.button`${tw`bg-blue-500 text-white px-2 py-1 mx-2 rounded`}`

const ListTitleTextEl = styled.span`${tw``}`

const ListItemContainer = styled.ul`${tw`list-none`}`

const ListItemEl = styled.li`${tw``}`


export { CollapseExpandContainer, Header, BodyTrueContainer, BodyContainer, CollapseButton, ExpandButton, ListTitleTextEl, ListItemContainer, ListItemEl }