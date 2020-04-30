import { action, observable } from "mobx"

class CartItem {
    cartItemId
    productId
    @observable quantity

    constructor(addedProduct) {
        this.cartItemId = Math.random()
        this.productId = addedProduct.productId
        this.quantity = 1
    }

    @action.bound
    incrementQuantity() {
        this.quantity++
    }
}

export default CartItem