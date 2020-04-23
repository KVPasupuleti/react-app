import usersResponse from '../../fixtures/getUsersResponse.json'

class UserFixtureService {
    
    getUsersApi() {
        return new Promise((resolve, reject) => {
            resolve(usersResponse)
        })
    }
}

export default UserFixtureService