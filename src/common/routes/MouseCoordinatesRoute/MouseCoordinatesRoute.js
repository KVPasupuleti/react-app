import React, { Component } from 'react'
import { MouseCoordinates } from '../../components/MouseCoordinates'
import { DisplayMouseCoordinates } from '../../components/DisplayMouseCoordinates'

class MouseCoordinatesRoute extends Component {
    render() {
        return (
            <MouseCoordinates render={(mouseX, mouseY) => (
                <DisplayMouseCoordinates mouseCoordinates={[mouseX, mouseY]}/>
                )}/>
        )
    }
}

export { MouseCoordinatesRoute }
