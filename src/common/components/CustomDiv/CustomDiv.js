import React, { Component } from 'react'
import { CustomDivEl } from './styles'

export class CustomDiv extends Component {
    render() {
        const { children } = this.props

        return (
            <CustomDivEl>
                {children}
            </CustomDivEl>
        )
    }
}
