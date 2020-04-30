import React, { Component } from 'react'
import { ProductSort } from '../ProductSort'
import { HeaderContainer, TotalItemsText } from './styles'
import { observer } from 'mobx-react'
import { SearchBar } from '../SearchBar'

@observer
class Header extends Component {
    render() {
        const { onChangeSortBy, totalNoOfProductsDisplayed, onSubmitSearchText } = this.props
    return (
        <HeaderContainer>
            <TotalItemsText>{totalNoOfProductsDisplayed} Products Found</TotalItemsText>
            <SearchBar onSubmitSearchText={onSubmitSearchText}/>
            <ProductSort onChangeSortBy={onChangeSortBy}/>
        </HeaderContainer>
    )
}
}

export default Header
