import React, { Component } from 'react'
import { SubTotalContainer, SubTotalText, TotalCartAmount } from './styles'

class SubTotal extends Component {
    render() {
        const { totalCartAmount } = this.props
        return (
            <SubTotalContainer>
                <SubTotalText>
                    SUBTOTAL
                </SubTotalText>
                <TotalCartAmount>
                    {totalCartAmount.toFixed(2)}
                </TotalCartAmount>
            </SubTotalContainer>
        )
    }
}

export default SubTotal
