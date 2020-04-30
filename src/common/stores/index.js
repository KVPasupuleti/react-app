import ProductStore from '../../EcommerceProductsDashboard/stores/ProductStore/ProductStore'
import ProductService from '../../EcommerceProductsDashboard/services/ProductService/ProductAPI'
import CartStore from '../../ShoppingCart/stores/CartStore/CartStore'
import AuthService from '../../Authentication/services/AuthService/AuthAPI'
import AuthStore from '../../Authentication/stores/AuthStore/AuthStore'

const productService = new ProductService
const productStore = new ProductStore(productService)

const authService = new AuthService
const authStore = new AuthStore(authService) 

const cartStore = new CartStore(productStore)

export default { authStore, productStore, cartStore }