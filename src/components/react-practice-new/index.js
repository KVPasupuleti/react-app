import React, { Component } from 'react'
import Header from './header'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

// @observer
export default class NewPractice extends Component {

    state = {
        number: 0,
        activity: "Do Nothing"
    }

    activityArray = ["Sing a song", "Imitate a hero", "Tell a dialogue", "Do Nothing", "Target Someone", "Tell a joke", "If you were someone, what will you do?", "3 wishes if god appears", "recite a poem", "beat someone", "enact a movie", "give expressions like your opposite gender", "ride a bicycle and park it assuming it's there", "take a resolution", "share your best experience in iB Hubs", "Enact like a child", "Enact like an old person", "Sell a pen", "Share your snacks/fruits with the next coming person"]

    // currentActivityArray = []

    job = "fED"

    @observable name = "Vamsi"

    onClickGenerateNumber = () => {
        // this.state.name = "Kaywee"
        // console.log(this.state.name)
        this.setState({
            number: Math.floor(Math.random() * 65)
        })

        console.log(this.state.number)
        
    
        // this.name = this.name==="Kaywee"?"Vamsi":"Kaywee"
    }

    onClickGenerateActivity = () => {

        this.setState({
            activity: this.activityArray[Math.floor(Math.random() * this.activityArray.length)]
    })
}

onClickGenerateRandomNumberAndActivity = () => {
    this.onClickGenerateActivity()
    this.onClickGenerateNumber()
}

    render() {
        console.log("App render called")
        return (
            <div style={{height: "100vh", width: "100vw", display: "flex", fontSize: "50px", flexDirection: "column", justifyContent: "space-around", alignItems:"center"}}>
                {/* <Header onChangeTheme={() => this.onChangeTheme()}/> */}
                <p>{this.state.number}</p>
                <p>{this.state.activity}</p>
                {/* <button onClick={this.onClickGenerateRandomNumberAndActivity} style={{color: "white", borderRadius:"10px", backgroundColor:"black"}}>Generate Random Number and Activity</button> */}
                <button onClick={this.onClickGenerateNumber} style={{color: "white", borderRadius:"10px", backgroundColor:"black"}}>Generate Random Number</button>
                <button onClick={this.onClickGenerateActivity} style={{color: "black", borderRadius:"10px", backgroundColor:"grey"}}>Generate Activity</button>
            </div>
        )
    }
}