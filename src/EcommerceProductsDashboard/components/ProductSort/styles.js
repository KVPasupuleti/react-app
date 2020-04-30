import styled from "@emotion/styled"
import tw from 'tailwind.macro'

const SortByLabel = styled.label`${tw`text-center mx-32`}`

const OptionsContainer = styled.select`${tw`rounded-md bg-white border border-gray-400 focus:outline-none`}`

const PriceFilterOption = styled.option`${tw`focus:outline-none`}`

const ChooseFilterOption = styled.option`${tw`hidden`}`

export { SortByLabel, OptionsContainer, PriceFilterOption, ChooseFilterOption }