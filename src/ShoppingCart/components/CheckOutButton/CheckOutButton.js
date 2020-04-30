import React, { Component } from 'react'
import { CheckoutButton } from './styles'

class CheckOutButton extends Component {
    render() {
        const { clearCart } = this.props
        return (
            <CheckoutButton onClick={clearCart}>
                CheckOut
            </CheckoutButton>
        )
    }
}

export default CheckOutButton