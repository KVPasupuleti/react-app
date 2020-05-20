import React, { Component } from 'react'
import { IndexUserContext } from '../../Contexts/ReactPracticeContext'

export default class PasswordInput extends Component {
    passwordRef = React.createRef()
    
    render() {
        return (
                <IndexUserContext.Consumer>
                    {value => 
                        <div>
                        <p>Username: {value.name}</p>
                        <input ref={this.passwordRef} type="text" style={{border:"2px solid pink"}}/>
                        </div>
                    }
                    </IndexUserContext.Consumer>
        )
    }
}