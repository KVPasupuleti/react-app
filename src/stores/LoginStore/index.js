import { observable, action } from 'mobx'

class LoginStore {
    @observable username = ""
    @observable password = ""
    @observable noOfSubmissions = 0
    @observable isVerified = false

    @action.bound
    validateLogin() {
        this.noOfSubmissions++
        if(this.username === "KrishnaVamsi" && this.password === "helloworld")
        {
            this.isVerified = true
            this.username = ""
            this.password = ""
            window.localStorage.setItem("isLoggedIn", JSON.stringify(true))
        }
        else {
            this.isVerified = false
            window.localStorage.setItem("isLoggedIn", false)
        }
    }

    updateUsername = (username) => {
        this.username = username
    }

    updatePassword = (password) => {
        this.password = password
    }
}


const loginStore = new LoginStore

export default  loginStore