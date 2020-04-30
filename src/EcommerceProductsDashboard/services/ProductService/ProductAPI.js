import { apiMethods } from "../../../constants/APIConstants"
import { create } from "apisauce"
import { networkCallWithApisauce } from "../../../utils/APIUtils"


class ProductService {
    api
    
    constructor() {
        this.api = create({
            baseURL: "https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/"
        })
    }

    getProductsAPI = () => {
        return networkCallWithApisauce(
            this.api,
            'v1/products/',
            {},
            apiMethods.get
        )
    }
}

export default ProductService