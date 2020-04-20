import { observable } from 'mobx';
import { API_INITIAL } from '@ib'

class UserStore {
    @observable getUsersApiStatus
    @observable getUsersApiError

    constructor() {
        this.init()
    }

    init() {
        this.getUsersApiStatus = API_INITIAL
        this.getUsersApiError = null
    }

    getUsers() {
        fetch("https://jsonplaceholder.typicode.com/users")
    }

    clearStore() {
        this.init()
    }
}

const userStore = new UserStore()

export default userStore
