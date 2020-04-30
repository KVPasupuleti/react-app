import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import Cookies from 'js-cookie'

class AuthStore {
    @observable username = ""
    @observable password = ""
    @observable noOfSubmissions = 0
    @observable isLoggedIn = false
    @observable access_token = ''
    @observable getAuthAPIError
    @observable getAuthAPIStatus

    authService

    constructor(authService) {
        this.authService = authService
    }

    @action.bound
    getAuthToken() {
        console.log(Cookies.get('username'))
        let username = Cookies.get('username')
        let password = Cookies.get('password')
        if(username !== undefined && password !== undefined) {
        const authPromise = this.authService.getAuthAPI()
        return bindPromiseWithOnSuccess(authPromise)
        .to(this.setGetAuthAPIStatus, this.setGetAuthAPIResponse)
        .then(this.setgetAuthAPIError)
        }
    }

    @action.bound
    removeAccessToken() {
        Cookies.remove('username')
        Cookies.remove('password')
        this.access_token = ""
    }

    @action.bound
    setGetAuthAPIStatus(apiStatus) {
        this.getAuthAPIStatus = apiStatus
    }

    @action.bound
    setGetAuthAPIResponse(apiResponse) {
        this.access_token = apiResponse[0].access_token
    }

    @action.bound
    setgetAuthAPIError(apiError) {
        this.getAuthAPIError = apiError
    }

    @action.bound
    validateSignin() {
        this.noOfSubmissions++
        if(this.username === "KrishnaVamsi" && this.password === "helloworld")
        {
            Cookies.set("username", this.username)
            Cookies.set("password", this.password)
            this.isLoggedIn = true
            this.username = ""
            this.password = ""
            this.getAuthToken()
            // window.localStorage.setItem("isLoggedIn", JSON.stringify(true))
        }
        else {
            this.isLoggedIn = false
            // window.localStorage.setItem("isLoggedIn", false)
        }
    }

    updateUsername = (username) => {
        this.username = username
    }

    updatePassword = (password) => {
        this.password = password
    }
}

export default AuthStore