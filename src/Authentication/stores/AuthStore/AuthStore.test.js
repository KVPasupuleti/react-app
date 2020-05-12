import AuthStore from './AuthStore'
import AuthService from '../../services/AuthService/AuthAPI'
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'
import getUserSignInAPIResponse from '../../fixtures/getUserSignInApiResponse.json'

describe("tests for Authstore", () => {

    let authService
    let authStore

    beforeAll(() => {
        authService = new AuthService()
        authStore = new AuthStore(authService)
    })
    

    test("init function should initialise the properties of AuthStore", () => {
        expect(authStore.username).toBe('')
        expect(authStore.password).toBe('')
        expect(authStore.noOfSubmissions).toBe(0)
        expect(authStore.isLoggedIn).toBe(false)
        expect(authStore.access_token).toBe('')
        expect(authStore.getAuthAPIError).toBe(null)
        expect(authStore.getAuthAPIStatus).toBe(API_INITIAL)
    })

    it("should test getAuthToken data fetching state", () => {

        const mockAuthLoadingPromise = new Promise(function(resolve, reject) {})
        
        const mockGetAuthAPI = jest.fn()
        mockGetAuthAPI.mockReturnValue(mockAuthLoadingPromise)
        authStore.authService.getAuthAPI = mockGetAuthAPI
        
        authStore.getAuthToken()
        
        expect(authStore.getAuthAPIStatus).toBe(API_FETCHING)
    })  

    it("should test getAuthToken data success state", async() => {

        const mockAuthLoadingPromise = new Promise(function(resolve, reject) {
            resolve(getUserSignInAPIResponse)
        })
        
        const mockGetAuthAPI = jest.fn()
        mockGetAuthAPI.mockReturnValue(mockAuthLoadingPromise)
        authStore.authService.getAuthAPI = mockGetAuthAPI
        
        await authStore.getAuthToken()
        
        expect(authStore.getAuthAPIStatus).toBe(API_SUCCESS)
    })  

    it("should test getAuthToken data failed state", async() => {

        const mockAuthLoadingPromise = new Promise(function(resolve, reject) {
            reject(new Error("Error occured"))
        })
        
        const mockGetAuthAPI = jest.fn()
        mockGetAuthAPI.mockReturnValue(mockAuthLoadingPromise)
        authStore.authService.getAuthAPI = mockGetAuthAPI
        
        await authStore.getAuthToken()
        
        expect(authStore.getAuthAPIStatus).toBe(API_FAILED)
    })  

    test("it should update username", () => {
        authStore.updateUsername("KrishnaVamsi")
        expect(authStore.username).toBe("KrishnaVamsi")
    })
})