import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
class MouseCoordinates extends Component {

    @observable mouseX = 0
    @observable mouseY = 0

    onMouseMove = (event) => {
        this.mouseX = event.clientX
        this.mouseY = event.clientY
    }

    render() {
        const { render } = this.props
        return (
            <div onMouseMove={this.onMouseMove}>
                {render(this.mouseX, this.mouseY)}
            </div>
        )
    }
}

export { MouseCoordinates }
