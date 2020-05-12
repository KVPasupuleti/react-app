import { API_INITIAL } from "@ib/api-constants"
import { action, observable, computed } from "mobx"
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
import { Product } from "../models/Product"

class ProductStore {
    @observable productList 
    @observable getProductListAPIStatus
    @observable getProductListAPIError
    productsAPIService
    @observable sizeFilter
    @observable sortBy
    @observable searchText
    originalProducts

    constructor(productService) {
        this.productsAPIService = productService
        this.init()
    }

    init() {
        this.productList = []
        this.getProductListAPIStatus = API_INITIAL
        this.getProductListAPIError = null
        this.sizeFilter = []
        this.sortBy = 'ASCENDING'
        this.searchText = ""
    }

    @action.bound
    getProductList() {
        
        const productsPromise = this.productsAPIService.getProductsAPI()
        
        return bindPromiseWithOnSuccess(productsPromise)
        .to(this.setGetProductListAPIStatus, this.setProductListResponse)
        .catch(this.setProductListAPIError)
    }

    @action.bound
    setProductListResponse(productListResponse) {
        this.productList = productListResponse.map(eachProduct => {
            const productObject = new Product(eachProduct)
            return productObject
        })
        this.originalProducts = this.productList
    }

    @action.bound
    setProductListAPIError(apiError) {
        this.getProductListAPIError = apiError
    }

    @action.bound
    setGetProductListAPIStatus(apiStatus) {
        this.getProductListAPIStatus = apiStatus
    }

    @action.bound
    onChangeSortBy(value) {
        this.sortBy = value
    }

    @action.bound
    onSubmitSearchText(searchText) {
        this.searchText = searchText
        if(this.searchText === "")
            this.productList = this.originalProducts
        else {
            this.productList = this.productList.filter(eachProduct => eachProduct.title.includes(this.searchText))
        }
    }

    @action.bound
    onSelectSize(buttonObject) {
        if(buttonObject.isSelected)
            this.sizeFilter.push(buttonObject.name)
        else
            this.sizeFilter = this.sizeFilter.filter(eachSize => eachSize !== buttonObject.name)
    }

    compare = (a, b) => {
        const productA = a.price
        const productB = b.price
        let comparison = 0
        if(productA > productB)
            comparison = 1
        else
            comparison = -1
        if(this.sortBy === 'ASCENDING')
        return comparison
        else
        return comparison * -1
    }

    @computed
    get products() {
        return this.productList
    }

    @computed
    get sortedAndFilteredProducts() {
        let filteredArray = this.products.filter(eachProduct => {
            let subSet =  this.sizeFilter.some(function checkPresence(eachSize) {
                return eachProduct.availableSizes.indexOf(eachSize) !== -1
            })
            return subSet
        })

        if(filteredArray.length === 0) 
            filteredArray = this.products
        let sortedAndFilteredArray = filteredArray.sort(this.compare)
        return sortedAndFilteredArray
    }

    @computed
    get totalNoOfProductsDisplayed() {
        return this.sortedAndFilteredProducts.length
    }
}

export default ProductStore