import React, { Component } from 'react'
import Header from './header'
import TextInput from './TextInput'
import ReactDOM from 'react-dom'
import WelcomeMessage from './WelcomeMessage'
import PasswordInput from './passwordInput'
import { IndexThemeContext } from '../../App'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

// @observer
class ReactPractice extends Component {
  state={
    number: "1"
}

  // @observable number = 1

  headerRef = null
  textInputRef = null
  passwordComponentRef = React.createRef()
  indexButtonRef = React.createRef()

setHeaderRef = (element) => {
  this.headerRef = element
}

componentDidMount() {
  // console.log(ReactDOM.findDOMNode(this.textInputRef.current))
  this.textInputRef.focus()
}

  onChangeTheme(theme) {
    console.log(this)
    // console.log("Hi")
    // const bgColor = this.indexButtonRef.current.style.backgroundColor
    // this.indexButtonRef.current.style.backgroundColor= bgColor==="black"?"red":"black"
    
    // this.setState({
    //   number: "2"
    // })

    // this.number = 2

    // console.log(this.indexButtonRef.current)
    // this.headerRef.setState({
    //     background: theme
    //   })
    //   this.passwordComponentRef.current.passwordRef.current.focus()
    }

    onClickButton = () => {
    //   this.setState(state => {
    //   number: state.number==="1"?"2":"1"
    // })
    this.setState({
      number: "2"
    })
    }
    
  welcomeMessage = <div style={{color: "green"}}>Hello World</div>
  
  render() {
    console.log("Index render called")
    const { onChangeTheme } = this
    return (
      <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"100vh"}}>
        <button 
        onClick={this.onClickButton} 
        ref={this.indexButtonRef}
        style={{color: "white", backgroundColor:"black", borderRadius: "30px"}}
        >Magic
        </button>
        <div>{this.state.number}</div>
        <Header />
        <TextInput textInputRef={el => this.textInputRef = el}/>
        <WelcomeMessage welcomeMessage={this.welcomeMessage}/>
        <PasswordInput ref={this.passwordComponentRef}/>
      </div>
    )
  }
}

// Index.contextType = IndexThemeContext

export default ReactPractice