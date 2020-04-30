import { action, computed, observable } from "mobx"
import productStore from '../../../common/stores/index'
import CartItem from "../models/CartItem/CartItem"

class CartStore {
    @observable cartProductList
    productStore

    constructor() {
        this.init()
    }

    init() {
        this.cartProductList = []
    }

    @action.bound
    onClickAddToCart(addedProduct) {
        let isProductAdded = this.cartProductList.some(eachProduct => eachProduct.productId === addedProduct.productId)
        if(!isProductAdded) {
            const cartItem = new CartItem(addedProduct)
            this.cartProductList.push(cartItem)
        }
        else {
            this.cartProductList.find(eachProduct => eachProduct.productId === addedProduct.productId).incrementQuantity()
        }
    }

    @action.bound
    onRemoveCartItem(cartItem) {
        this.cartProductList = this.cartProductList.filter(eachItem => eachItem.cartItemId !== cartItem.cartItemId)
    }

    @action.bound
    clearCart() {
        this.cartProductList = []
        alert("Your shipment will be delivered within 3 days")
    }

    @action.bound
    getProductDetailsById(productId) {
        const product = productStore.productStore.productList.find(eachProduct => eachProduct.productId === productId)
        return product
    }

    @computed
    get totalCartAmount() {
        let productPrizesList = this.cartProductList.map(eachProduct => this.getProductDetailsById(eachProduct.productId).price*eachProduct.quantity)
            
        return productPrizesList.reduce(function(total, eachPrice) {
            return total + eachPrice 
        }, 0)
    }

    @computed
    get noOfProductsInCart() {
        let productQuantityList =  this.cartProductList.map(eachProduct => eachProduct.quantity)

        return productQuantityList.reduce(function(total, eachQuantity) {
            return total + eachQuantity
        }, 0)
    }
}

export default CartStore