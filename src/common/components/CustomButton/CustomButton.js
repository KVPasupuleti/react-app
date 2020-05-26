import React, { Component } from 'react'
import { ButtonEl } from './styles'

class CustomButton extends Component {
    render() {
        const { onClick } = this.props
        return (
            <ButtonEl onClick={onClick}>
                Custom Button
            </ButtonEl>
        )
    }
}

export { CustomButton }