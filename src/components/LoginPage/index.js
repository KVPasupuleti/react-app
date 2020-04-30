import React, { Component } from 'react';
import { observer } from 'mobx-react';
import loginStore from '../../stores/LoginStore';
import { withRouter } from 'react-router-dom';

@observer
class LoginPage extends Component {
    
    getUsername = () => {
        return loginStore.username
    }

    getPassword = () => {
        return loginStore.password
    }

    updateUsername = (event) => {
        loginStore.updateUsername(event.target.value)
    }

    updatePassword = (event) => {
        loginStore.updatePassword(event.target.value)
    }

    validateLogin = () => {
        this.noOfSubmissions++
        loginStore.validateLogin()
        if(loginStore.isVerified === true) {
            this.props.history.replace('e-commerce-app')
        }
    }
    
    render() {
        const { isVerified, username, password, noOfSubmissions } = loginStore
        return(
            <div style={{height: "100vh", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <input type="text" placeholder="Enter Username" value={this.getUsername()} onChange={this.updateUsername} style={{margin: "10px", border: "2px solid orange"}}/>
                <input type="text" placeholder="Enter Password" value={this.getPassword()} onChange={this.updatePassword} style={{margin: "10px", border: "2px solid yellow"}}/>
                <button onClick={this.validateLogin} style={{margin: "10px", border: "2px solid black", backgroundColor: "blue", color: "white"}}>Login</button>
                <p>{!isVerified && (username !== "" && password !== "") && noOfSubmissions>0?"Credentials didn't match with our data":""}</p>
            </div>
        );
    }
}

export default withRouter(LoginPage)