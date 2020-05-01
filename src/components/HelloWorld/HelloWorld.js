import React, { Component } from 'react'
export class HelloMessage extends Component {
    render() {
        return (
            <div>
                Hello ${this.props.message}
            </div>
        )
    }
}