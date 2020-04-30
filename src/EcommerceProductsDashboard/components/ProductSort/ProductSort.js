import React, { Component } from 'react'
import { OptionsContainer, SortByLabel, PriceFilterOption, ChooseFilterOption } from './styles'
import { observer } from 'mobx-react'

@observer
class ProductSort extends Component {

    onChangeSortBy = (event) => {
        const { onChangeSortBy } = this.props
        onChangeSortBy(event.target.value)
    }

    render() {
    return (
        <SortByLabel>Sort By Price:
        <OptionsContainer onChange={this.onChangeSortBy}>
            <ChooseFilterOption >Select</ChooseFilterOption>
            <PriceFilterOption value="ASCENDING">Lowest to Highest</PriceFilterOption>
            <PriceFilterOption value="DESCENDING">Highest to Lowest</PriceFilterOption>
        </OptionsContainer>
        </SortByLabel>
    )
}
}

export default ProductSort