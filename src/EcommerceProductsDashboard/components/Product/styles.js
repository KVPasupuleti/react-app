import tw from 'tailwind.macro'
import styled from '@emotion/styled'


let ProductCard = styled.div`${tw`flex flex-col border-solid m-2 w-32 items-center p-2 relative`};
width: 200px;&
:hover {
    border : 1px solid lightgrey
}`

let ShippingText = styled.span`${tw`absolute top-10 right-0 bg-black p-1 text-xs text-white`}`

let ProductImage = styled.img`${tw`w-4/5 object-contain mb-2`}`

let ProductTitle = styled.span`${tw`text-center`};
height: 45px;`

let SeperationLine = styled.div`${tw`w-4 border-t-2 rounded border-yellow-600 mt-2px mb-4`}`

let ProductCostContainer = styled.p``

let CurrencySymbol = styled.span`${tw`text-xs mr-1`}`

let ProductCost = styled.span`${tw`text-xl`}`

let InstallmentsText = styled.p`${tw`text-sm text-gray-700 mb-4 h-5`}`

let AddToCartButton = styled.button`${tw`w-full py-3 text-white bg-black text-center rounded text-sm focus:outline-none`}`

export { ProductCard, ShippingText, ProductImage, ProductTitle, SeperationLine, ProductCostContainer, CurrencySymbol, ProductCost, InstallmentsText, AddToCartButton }