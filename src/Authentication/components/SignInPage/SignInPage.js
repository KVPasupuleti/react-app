import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import authStore from '../../../common/stores'
import { reaction } from 'mobx';

@observer
class SigninPage extends Component {
    
    componentDidMount() {
        this.doNetworkCalls()
    }

    doNetworkCalls() {
        authStore.authStore.getAuthToken()
    }

    accessTokenReaction = reaction(() => (authStore.authStore.access_token), (access_token) => 
    this.props.history.replace('e-commerce-app'))

    getUsername = () => {
        return authStore.authStore.username
    }

    getPassword = () => {
        return authStore.authStore.password
    }

    updateUsername = (event) => {
        authStore.authStore.updateUsername(event.target.value)
    }

    updatePassword = (event) => {
        authStore.authStore.updatePassword(event.target.value)
    }

    validateSignin = () => {
        authStore.authStore.validateSignin()
        // if(authStore.authStore.isLoggedIn) {
        //     this.props.history.replace('e-commerce-app')
        //     {window.confirm("We are collecting cookies to help you")}
        // }
    }
    
    render() {
        const { isVerified, username, password, noOfSubmissions } = authStore.authStore
        // console.log("username", authStore.authStore.authStore.authStore.username)
        return(
            <div style={{height: "100vh", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <input type="text" placeholder="Enter Username" value={this.getUsername()} onChange={this.updateUsername} style={{margin: "10px", border: "2px solid orange"}}/>
                <input type="text" placeholder="Enter Password" value={this.getPassword()} onChange={this.updatePassword} style={{margin: "10px", border: "2px solid yellow"}}/>
                <button onClick={this.validateSignin} style={{margin: "10px", border: "2px solid black", backgroundColor: "blue", color: "white"}}>Login</button>
                <p>{!isVerified && (username !== "" && password !== "") && noOfSubmissions>0?"Credentials didn't match with our data":""}</p>
            </div>
        );
    }
}

export default withRouter(SigninPage)