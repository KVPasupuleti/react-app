import React, { Component } from 'react'

export function withToggle(WrappedComponent) {

    return class index extends Component {

        state = {
            toggleStatus : false
        }

        onToggle = () => {
            this.setState({
                toggleStatus : !this.state.toggleStatus
            })
        }

        render() {
            const { toggleStatus } = this.state
            return <WrappedComponent toggleStatus={toggleStatus} onToggle={this.onToggle}/>
        }
    }
}