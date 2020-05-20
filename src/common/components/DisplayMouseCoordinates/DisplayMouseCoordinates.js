import React, { Component } from 'react'
import { DisplayContainer, Header, TextEl } from './styles'

class DisplayMouseCoordinates extends Component {
    render() {
        const { mouseCoordinates } = this.props
        return (
            <DisplayContainer>
                <Header>DisplayMouseCoordinates</Header>
                <TextEl>The mouse position is ({mouseCoordinates[0]}, {mouseCoordinates[1]})</TextEl>
            </DisplayContainer>
        )
    }
}

export { DisplayMouseCoordinates }