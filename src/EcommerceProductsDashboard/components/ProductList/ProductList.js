import React, { Component } from 'react'
import Product from '../Product/Product'
import { observer } from 'mobx-react'
import { ProductCardsContainer } from './styles'

@observer
class ProductList extends Component {

    renderProductList = () => {
        const { productList, onClickAddToCart } = this.props
        return productList.map(eachProduct => {
            return <Product eachProduct={eachProduct} key={eachProduct.productId} onClickAddToCart={onClickAddToCart}/>
        })
    }

    render() {
    return (
        <ProductCardsContainer>
            {this.renderProductList()}
        </ProductCardsContainer>
    )
}
}

export default ProductList