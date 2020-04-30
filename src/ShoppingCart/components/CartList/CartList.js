import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem'
import { observer } from 'mobx-react'
import { CartListContainer } from './styles'

@observer
class CartList extends Component {

    renderCartItems = () => {
        const { cartProductList, onRemoveCartItem, getProductDetailsById } = this.props
        return cartProductList.map(eachItem => <CartItem key={Math.random()} eachItem={eachItem}
            onRemoveCartItem={onRemoveCartItem}
            getProductDetailsById={getProductDetailsById}/>)
    }

    render() {
        return (
            <CartListContainer>
                {this.renderCartItems()}
                <hr></hr>
            </CartListContainer>
        )
    }
}

export default CartList
