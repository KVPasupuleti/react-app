import { observable, action } from 'mobx';
import {  API_INITIAL } from '@ib/api-constants'

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

class UserStore {
    @observable getUsersApiStatus
    @observable getUsersApiError
    @observable users
    userService

    constructor(userService) {
        this.userService = userService
        this.init()
    }

    @action.bound
    init() {
        this.getUsersApiStatus = API_INITIAL
        this.getUsersApiError = null
        this.users = []
    }
    
    @action.bound
    setUsersApiResponse(usersResponse) {
        this.users = usersResponse.map(user => user.name) 
    }

    @action.bound
    setUsersApiError(error) {
        this.getUsersApiError = error
    }

    @action.bound
    setUsersApiStatus(apiStatus) {
        this.getUsersApiStatus = apiStatus
    }

    @action.bound
    getUsersApi() {
        const usersPromise = this.userService.getUsersApi()
        return bindPromiseWithOnSuccess(usersPromise)
        .to(this.setUsersApiStatus, this.setUsersApiResponse)
        .catch(this.setUsersApiError)


        fetch("kwdnd").then(response => resposmse.json).then().then().catch
    }

    clearStore() {
        this.init()
    }
}

export default UserStore