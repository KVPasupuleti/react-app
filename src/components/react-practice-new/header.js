import React, { Component } from 'react'
import { observer } from 'mobx-react'

// @observer
export default class Header extends Component {
    
    shouldComponentUpdate(nextProps) {
        return this.props.onChangeTheme !== nextProps.onChangeTheme
    }

    render() {
        console.log("header render called")
        return (
            <div>
                Header
            </div>
        )
    }
}