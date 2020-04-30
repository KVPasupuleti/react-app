import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductCard, ShippingText, ProductImage, ProductTitle, SeperationLine, ProductCostContainer, CurrencySymbol, ProductCost, InstallmentsText, AddToCartButton } from './styles'
import { action } from 'mobx'

@observer
class Product extends Component {

    @action.bound
    onClickAddToCart({closeToast}) {
        console.log({closeToast})
        toast.warn("Product added to cart!")
        const { onClickAddToCart, eachProduct } = this.props
        onClickAddToCart(eachProduct)
    }


    render() {
        const { eachProduct } = this.props
        const { isFreeShipping, imageURL, title, currencyFormat, price, installmentsCount } = eachProduct
    return (
        <ProductCard>
            <ShippingText>{isFreeShipping?"Free Shipping":"Shipping Charges Apply"}</ShippingText>
            <ProductImage src={imageURL}/>
            <ProductTitle>{title}</ProductTitle>
            <SeperationLine></SeperationLine>
            <ProductCostContainer>
                <CurrencySymbol>{currencyFormat}</CurrencySymbol>
                <ProductCost>{price}</ProductCost>
            </ProductCostContainer>
            <InstallmentsText>{installmentsCount} * {(price/installmentsCount).toFixed(2)}</InstallmentsText>
            <AddToCartButton onClick={this.onClickAddToCart}>Add To Cart</AddToCartButton>
            <ToastContainer position={toast.POSITION.BOTTOM_CENTER} closeButton={false} 
            closeOnClick={true} hideProgressBar={true} autoClose={3000} draggable={true} 
            draggablePercent={60} transition={Slide}/>
        </ProductCard>
    )
}
}

export default Product
