import ProductStore from './ProductStore'
import ProductService from '../../services/ProductService/ProductAPI'
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'
import getProductListAPIResponse from '../../fixtures/productListAPIResponse.json'

describe("ProductStore tests", () => {

    let productService
    let productStore

    beforeAll(() => {
        productService = new ProductService()
        productStore = new ProductStore(productService)
    })

    it("should initialise productService", () => {
        expect(productStore.productsAPIService).toBe(productService)
    })

    it("should initialise productStore properties", () => {
        expect(productStore.productList).toEqual([]) 
        expect(productStore.getProductListAPIStatus).toBe(API_INITIAL)
        expect(productStore.getProductListAPIError).toBe(null)
        expect(productStore.sizeFilter).toEqual([])
        expect(productStore.sortBy).toBe('ASCENDING')
    })

    it("should test productsApi fetching state", () => {
        const mockLoadingPromise = new Promise(function(resolve, reject) {})

        const mockGetProductsApi = jest.fn()
        mockGetProductsApi.mockReturnValue(mockLoadingPromise)
        
        productStore.productsAPIService.getProductsAPI = mockGetProductsApi

        productStore.getProductList()

        expect(productStore.getProductListAPIStatus).toBe(API_FETCHING)
    })

    it("should test productsApi sucess state", async() => {
        const mockLoadingPromise = new Promise(function(resolve, reject) {
            resolve(getProductListAPIResponse)
        })

        const mockGetProductsApi = jest.fn()
        mockGetProductsApi.mockReturnValue(mockLoadingPromise)
        
        productStore.productsAPIService.getProductsAPI = mockGetProductsApi

        await productStore.getProductList()

        expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS)
    })

    it("should test productsApi failed state", async() => {
        const mockLoadingPromise = new Promise(function(resolve, reject) {
            reject(new Error("It's an Error"))
        })

        const mockGetProductsApi = jest.fn()
        mockGetProductsApi.mockReturnValue(mockLoadingPromise)
        
        productStore.productsAPIService.getProductsAPI = mockGetProductsApi

        await productStore.getProductList()

        expect(productStore.getProductListAPIStatus).toBe(API_FAILED)
    })

    it("should change sort options", () => {
        const sortingOrder = "ASCENDING"
        productStore.onChangeSortBy(sortingOrder)
        expect(productStore.sortBy).toBe(sortingOrder)
    })

    it("should render searched products", () => {
        const searchText = "Sphynx"
        productStore.onSubmitSearchText(searchText) 
        const searchedProducts = [productStore.originalProducts[2], productStore.originalProducts[6]]
        expect(productStore.productList).toEqual(searchedProducts)
    })

    it("should render all products", () => {
        const searchText = ""
        productStore.onSubmitSearchText(searchText) 
        expect(productStore.productList).toEqual(productStore.originalProducts)
    })

    it("should render the products according to sizes", () => {
        const buttonObject = {
            name: "XS",
            isSelected: true
        }
        productStore.onSelectSize(buttonObject)
        expect(productStore.sizeFilter).toEqual(["XS"])
        buttonObject.isSelected = false
        productStore.onSelectSize(buttonObject)
        expect(productStore.sizeFilter).toEqual([])
    })

    it("should return no of products displayed", () => {
        productStore.productList = productStore.originalProducts
        expect(productStore.totalNoOfProductsDisplayed).toBe(16)
    })

    it("should render descending order of products", () => {
        const outputList = [productStore.originalProducts[7], productStore.originalProducts[0]]
        productStore.sortBy = "DESCENDING"
        productStore.sizeFilter = ["XS"]
        expect(productStore.sortedAndFilteredProducts).toEqual(outputList) 
    })
})