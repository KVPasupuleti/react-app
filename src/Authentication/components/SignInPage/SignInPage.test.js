import React from 'react'
import SignInPage from './SignInPage'
import authStore from '../../../common/stores'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe("SignInPage tests", () => {

    it("should call doNetworkCalls function", () => {
        const username = "KrishnaVamsi"
        const password = "helloworld"
        const { getByPlaceholderText } = render(<Router history={createMemoryHistory()}>
        <SignInPage/>
        </Router>
        )
        const usernameComp = getByPlaceholderText("Enter Username")
        const passwordComp = getByPlaceholderText("Enter Password")
        fireEvent.change(usernameComp, { target: { value: username } })
        fireEvent.change(passwordComp, { target: { value:password } })
    })

    it("should render typed username", () => {
        const { getByPlaceholderText } = render(
        <Router history={createMemoryHistory()}>
        <SignInPage/>
        </Router>
        )
        const usernameComp = getByPlaceholderText("Enter Username")
        expect(usernameComp.value).toBe(authStore.authStore.username)
    })

    it("should render typed password", () => {
        const { getByPlaceholderText } = render(
        <Router history={createMemoryHistory()}>
        <SignInPage/>
        </Router>
        )
        const passwordComp = getByPlaceholderText("Enter Password")
        expect(passwordComp.value).toBe(authStore.authStore.password)
    })

    it("should render empty state page", () => {
        const username = ""
        const password = ""
        const { getByRole, getByPlaceholderText, getByText } = render(
            <Router history={createMemoryHistory()}>
            <SignInPage/>
            </Router>
            )
        const signInButton = getByRole("button", name="SignIn Button")
        const usernameComp = getByPlaceholderText("Enter Username")
        const passwordComp = getByPlaceholderText("Enter Password")
        fireEvent.change(usernameComp, { target: { value: username } })
        fireEvent.change(passwordComp, { target: { value:password } })
        fireEvent.click(signInButton)
        console.log("username", authStore.authStore.username, authStore.authStore.password)
        getByText("Credentials didn't match with our data")
    })

    it("should render success state", () => {
        const history = createMemoryHistory()
        const route = 'e-commerce-app'
        history.push(route)

        const { getByPlaceholderText, getByRole, getByText } = render(
            <Router history={createMemoryHistory()}>
            <SignInPage/>
            </Router>
        )
        
        const username = "KrishnaVamsi"
        const password = "helloworld"

        const signInButton = getByRole("button", name="SignIn Button")
        const usernameComp = getByPlaceholderText("Enter Username")
        const passwordComp = getByPlaceholderText("Enter Password") 

        
    })

})