import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

class ListItem extends Component {
    render() {
        const { item } = this.props
        return(
            <li>{item}</li>
        )
    }
}

@observer
export default class Index extends Component {

    state = {
        numbers: [1, 2, 3, 4, 5]
    }

    renderList = () => {
        const { numbers } = this.state
        return numbers.map((number, index) => {
            return <ListItem key={index} item={number}/> 
        })
    }

    removeItem = () => {
        const { numbers } = this.state
        const dummy = numbers.slice()
        dummy.splice(1, 1)
        console.log(dummy)
        this.setState({
            numbers: dummy
        })
    }

    render() {
        return (
            <div>
                <ul>
                {this.renderList()}
                </ul>
                <button onClick={this.removeItem}>Click</button>
            </div>
        )
    }
}
