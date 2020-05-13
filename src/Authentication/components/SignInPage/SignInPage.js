/*
import React, { Component } from 'react'
import { observer } from 'mobx-react';

@observer
class SigninPage extends Component {
    render() {
            const {
            apiStatus,
            username,
            onChangeUsername,
            password,
            onChangePassword,
            onEnterKeyPress,
            onSubmitForm,
            errorMessage
            } = this.props;
        return(
            <div className="flex justify-center items-center h-screen bg-gray-200">
                <form className="flex flex-col p-10 bg-white">
                    <h2 className="font-bold mb-4">Sign In</h2>
                    <input 
                    type="text"
                    value={username}
                    onChange={onChangeUsername}
                    className="border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded"
                    placeholder="Username"
                    />
                    <input
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    className="border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded"
                    placeholder="Password"
                    onKeyPress={onEnterKeyPress}
                    />
                    <button 
                    text="Sign in"
                    onClick={onSubmitForm}
                    className="flex justify-center w-48 h-10 rounded bg-gray-900"
                    apiStatus={apiStatus}
                    onKeyPress={onEnterKeyPress}>
                        Sign in
                    </button>
                    {errorMessage !== "" && errorMessage !== undefined ? (
                    <span className="text-red-700 mt-2 w-48 text-sm">
                    {errorMessage}
                    </span>
                    ) : null}
                </form>
            </div>
        );
    }
}


export default SigninPage

*/



import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import authStore from '../../../common/stores'
import { reaction } from 'mobx';

const DisplayMessage = (props) => {
    return props.children()
}

@observer
class SigninPage extends Component {
    usernameRef = React.createRef()
    passwordRef = React.createRef()
    componentDidMount() {
        this.usernameRef.current.focus()
        this.doNetworkCalls()
    }

    doNetworkCalls() {
        // authStore.authStore.getAuthToken()
    }

    accessTokenReaction = reaction(() => (authStore.authStore.access_token), (access_token) => { 
        if(authStore.authStore.username === "KrishnaVamsi" && authStore.authStore.password === "helloworld")
        this.props.history.replace('e-commerce-app')
    })
    

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
    }

    errorHandler = () => {
        const { isLoggedIn, username, password, noOfSubmissions } = authStore.authStore
        if(!isLoggedIn && noOfSubmissions>0) {
            this.passwordRef.current.focus()
            return "Credentials didn't match with our data"
        }
        else {
            return ""
        }
    }
    
    render() {
        return( 
            <div style={{height: "100vh", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px solid black"}}>
                <input type="text" placeholder="Enter Username" ref={this.usernameRef} value={this.getUsername()} onChange={this.updateUsername} style={{margin: "10px", border: "2px solid grey", borderRadius: "2px"}}/>
                <input type="text" placeholder="Enter Password" ref={this.passwordRef} value={this.getPassword()} onChange={this.updatePassword} style={{margin: "10px", border: "2px solid grey", borderRadius: "2px"}}/>
                <button name="SignIn Button" onClick={this.validateSignin} style={{margin: "10px", border: "2px solid black", backgroundColor: "black", color: "white", borderRadius: "5px"}}>Signin</button>
        <p data-testid="error-element">{this.errorHandler()}</p>
        <DisplayMessage>{() => {return <div>Hello</div>}}</DisplayMessage>
            </div>
        );
    }
}

export default withRouter(SigninPage)
