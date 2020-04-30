import React, { Component } from 'react'
import { observable, action } from 'mobx'
import CartList from '../CartList/CartList'
import { inject, observer } from 'mobx-react'
import { ProductCartContainer, CrossButton, CartDashboardContainer, CartHeader,
    CartSymbolContainer, CartSymbol, CartImage, Circle1, Circle2, CartHeadingText, CartBody, CartFooter } from './styles'
import { CheckOutButton } from '../CheckOutButton'
import { SubTotal } from '../SubTotal'
import { FiShoppingCart } from 'react-icons/fi'
import { FaShoppingCart } from 'react-icons/fa'


@inject('productStore', 'cartStore')
@observer
class ProductCart extends Component {

    @observable shouldDisplayCart = false

    @action.bound
    showOrHideCart() {
        this.shouldDisplayCart = !this.shouldDisplayCart
        console.log(this.shouldDisplayCart)
    }

    render() {
        const { cartStore, productStore } = this.props
        const { cartProductList, getProductDetailsById, onRemoveCartItem, totalCartAmount, clearCart, noOfProductsInCart } = cartStore
        return(
            <ProductCartContainer>
                <CartDashboardContainer>
                <CrossButton onClick={this.showOrHideCart} shouldDisplayCart={this.shouldDisplayCart}>
                {this.shouldDisplayCart?"X":
                <div style={{width: "100px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div style={{}}><FiShoppingCart/></div>
                    <span>{noOfProductsInCart}</span>
                </div>}
                </CrossButton>
                <CartBody shouldDisplayCart={this.shouldDisplayCart}>
                <CartSymbolContainer>
                <FiShoppingCart/>
                    <p>{noOfProductsInCart}</p>
                </CartSymbolContainer>
                
                {cartProductList.length===0?
                <div style={{alignSelf: "center", color:"white", position: "fixed", top: "335px"}}>Add some products into the cart</div>:
                <CartList cartProductList={cartProductList} 
                    onRemoveCartItem={onRemoveCartItem}
        getProductDetailsById={getProductDetailsById}/> }
                <CartFooter>
                    <SubTotal totalCartAmount={totalCartAmount}/>
                    <CheckOutButton clearCart={clearCart}/>
                </CartFooter>
                </CartBody> 
                </CartDashboardContainer>
            </ProductCartContainer>
        )
    }
}

export default ProductCart

{/* <CartHeader>
                    <CartSymbolContainer>
                        <CartSymbol>
                            <CartImage xmnls="http://www.w3.org/2000/svg">
                                <Circle1></Circle1>
                                <Circle2></Circle2>
                            </CartImage>
                            </CartSymbol>
                    </CartSymbolContainer>
                    <CartHeadingText>Cart</CartHeadingText>
                </CartHeader> */}