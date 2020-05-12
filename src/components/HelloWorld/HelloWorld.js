import React, { Component } from 'react'
export class HelloMessage extends Component {
    appUsername = ""
    appPassword = ""

    onChangeUsername = (e) => {
        this.appUsername = e.target.value
    }

    onChangePassword = (e) => {
        this.appPassword = e.target.value
    }

    render() {
        const { username, password } = this.props
        return (
            <div>
                <input placeholder="Username" onChange={this.onChangeUsername} value={username}/>
                <input placeholder="Password" onChange={this.onChangeUsername} value={password}/>
                <button>Submit</button>
            </div>
        )
    }
}