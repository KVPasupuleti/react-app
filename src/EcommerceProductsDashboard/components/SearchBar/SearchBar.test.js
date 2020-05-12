import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SearchBar from './SearchBar'
import ProductStore from '../../stores/ProductStore/ProductStore'
import ProductService from '../../services/ProductService/ProductAPI'

describe("Searchbar Tests", () => {

    let productStore
    let productService

    beforeAll(() => {
        productService = new ProductService()
        productStore = new ProductStore(productService)
    })

    it("should check if there is an input tag in the Component", () => {
        const { getByPlaceholderText } = render(
            <SearchBar onSubmitSearchText={productStore.onSubmitSearchText}/>
        )
        getByPlaceholderText("Search product")
    })

    it("should test if onSubmitSearchText function in store is called", () => {
        const mockAlert = jest.fn()
        window.alert = mockAlert
        const { getByPlaceholderText } = render(
            <SearchBar onSubmitSearchText={productStore.onSubmitSearchText}/>
        )
        const searchInputComp = getByPlaceholderText("Search product")
        fireEvent.change(searchInputComp, { target: { value: "hello" } })
        fireEvent.keyDown(searchInputComp, { key: 'Enter', code: 'Enter' })
        expect(mockAlert).toBeCalled()
        // expect(productStore.searchText).toBe("hello")
    })
})