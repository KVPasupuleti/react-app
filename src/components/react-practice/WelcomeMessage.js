import React, { Component } from 'react'

export default class WelcomeMessage extends Component {
    render() {
        const { welcomeMessage } = this.props
        return (
            <div>
                {welcomeMessage}
            </div>
        )
    }
}
