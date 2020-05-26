import { apiMethods } from "../../../constants/APIConstants"
import { create } from "apisauce"
import { networkCallWithApisauce } from "../../../utils/APIUtils"
import { Endpoints } from "../endpoints"


class ProductService {
    api
    
    constructor() {
        this.api = create({
            // baseURL: "https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/"
            baseURL: "https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/ecommerce/"
        })
    }

    getProductsAPI = (endPointObject) => {
        return networkCallWithApisauce(
            this.api,
            Endpoints(endPointObject),
            {},
            apiMethods.get
        )
    }
}

export default ProductService