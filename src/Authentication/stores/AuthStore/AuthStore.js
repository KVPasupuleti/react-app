import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import Cookies from 'js-cookie'
import { API_INITIAL } from '@ib/api-constants'

class AuthStore {
    @observable username
    @observable password
    @observable noOfSubmissions
    @observable isLoggedIn 
    @observable access_token
    @observable getAuthAPIError
    @observable getAuthAPIStatus

    authService
        
    constructor(authService) {
        this.authService = authService
        this.init()
    }

    init() {
        this.username = ''
        this.password = ''
        this.noOfSubmissions = 0
        this.isLoggedIn = false
        this.access_token = ''
        this.getAuthAPIError = null
        this.getAuthAPIStatus = API_INITIAL
    }

    @action.bound
    getAuthToken() {
        // let username = Cookies.get('username')
        // let password = Cookies.get('password')
        // if(username !== undefined && password !== undefined) {
        const authPromise = this.authService.getAuthAPI()
        
        return bindPromiseWithOnSuccess(authPromise)
        .to(this.setGetAuthAPIStatus, this.setGetAuthAPIResponse)
        .catch(this.setgetAuthAPIError)
        // } 
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
            this.getAuthToken()
        }
        else {
            this.isLoggedIn = false
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