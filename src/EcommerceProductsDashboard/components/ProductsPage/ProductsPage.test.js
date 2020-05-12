import React from 'react'
import ProductStore from '../../stores/ProductStore/ProductStore'
import ProductService from '../../services/ProductService/ProductAPI'
import { render } from '@testing-library/react'
import ProductsPage from './ProductsPage'
import stores from '../../../common/stores'
import { Route, Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { createMemoryHistory } from "history"

describe("Products Page Tests", () => {

    let productStore
    let productService

    beforeAll(() => {
        productService = new ProductService()
        productStore = new ProductStore(productService)
    })

    it("should check whether the stores are received from props", () => {
        const {getByText} = render(
        <Provider {...stores}>
            <Router history={createMemoryHistory()}>
                <Route path="e-commerce-app">
                    <ProductsPage/>
                </Route>
            </Router>
        </Provider>
        )
    })
})