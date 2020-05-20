import React, { Component } from 'react'
import { IndexThemeContext, IndexUserContext } from '../../Contexts/ReactPracticeContext'

export default class Header extends Component {

    shouldComponentUpdate(nextProps) {
        console.log(this.props, nextProps)
        return this.props !== nextProps
    }

    state={
        background: "orange"
    }

    buttonRef = null

    setButtonRef = (el) => {
        this.buttonRef = el
    }

    onChangeTheme = () => {
        let theme = this.state.background==="orange"?"red":"orange"
        this.props.onChangeTheme(theme)
    }

    render() {
        console.log("Header Render called")
        return (
            <div>
                <IndexThemeContext.Consumer>
                    {(themeValue) =>
                        <IndexUserContext.Consumer>
                            {(userDetails) =>
                            <div>
                                <p>Username: {userDetails.name}</p>
                        <button
                        style={{backgroundColor: themeValue.theme.background, color: themeValue.theme.color}} 
                        onClick={themeValue.changeContextValue}
                        ref={this.setButtonRef}
                        >Change Theme</button>
                        </div>
                            }
                            </IndexUserContext.Consumer>
                    }
                </IndexThemeContext.Consumer> 
            </div>
        )
    }
}
