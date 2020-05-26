import tw from 'tailwind.macro'
import styled from '@emotion/styled'

let ProductsPageContainer = styled.div`${tw`relative border`}`

let SignOutButton = styled.button`${tw`border border-gray-800 p-1 rounded text-xs`}`

let ProductsDashboardContainer = styled.div`${tw`flex`}`

let HeaderAndProductsListContainer = styled.div`${tw`flex flex-col flex-1 my-12`};
padding-right: 30px;
margin-right: 100px`

export { ProductsDashboardContainer, SignOutButton, HeaderAndProductsListContainer, ProductsPageContainer }