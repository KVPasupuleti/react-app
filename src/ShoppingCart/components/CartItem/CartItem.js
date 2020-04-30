import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { action } from 'mobx'
import { CartItemContainer, CartItemCrossButton, CartItemImage, CartItemBodyText, CartItemTitle, CartItemStyleText, CartItemQuantityText, CartItemCost, CartItemSeperationLine } from './styles'


@observer
class CartItem extends Component {

    @action.bound
    onRemoveCartItem() {
        const { eachItem, onRemoveCartItem } = this.props
        onRemoveCartItem(eachItem)
    }

    render() {
        const { eachItem, getProductDetailsById } = this.props
        const { quantity, productId } = eachItem
        const product = getProductDetailsById(productId)
        const { title, imageURL, printStyle, currencyFormat, price } = product
        return (
            <CartItemContainer>
                <CartItemCrossButton onClick={this.onRemoveCartItem}>X</CartItemCrossButton>
                <CartItemImage src={imageURL}/>
                <CartItemBodyText>
                    <CartItemTitle>{title}</CartItemTitle>
                    <CartItemStyleText>{printStyle}</CartItemStyleText>
                    <CartItemQuantityText>Quantity: {quantity}</CartItemQuantityText>
                </CartItemBodyText>
                <CartItemCost>{currencyFormat} {price}</CartItemCost>
                <CartItemSeperationLine></CartItemSeperationLine>
            </CartItemContainer>
        )
    }
}

export default CartItem