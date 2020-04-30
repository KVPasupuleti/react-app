import React, { Component } from "react";
import { ProductList } from "../ProductList";
import { Header } from "../Header";
import { SizeFilter } from "../../../SizeFilterModule/components/SizeFilter";
import { inject, observer } from "mobx-react";
import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperWithFailure";
import { ProductCart } from "../../../ShoppingCart/components/ProductCart";
import authStore from '../../../common/stores'
import { ProductsPageContainer, ProductsDashboardContainer, HeaderAndProductsListContainer, SignOutButton } from "./styles";

@inject('productStore', 'cartStore', 'authStore')
@observer
class ProductsPage extends Component {
    componentDidMount() {
        this.doNetworkCalls()
    }

    doNetworkCalls = () => {
        const { productStore } = this.props
        productStore.getProductList()
    }

    renderProductsList = observer(() => {
        const { productStore, cartStore } = this.props
        const { sortedAndFilteredProducts } = productStore
        const { onClickAddToCart } = cartStore
        return <ProductList productList={sortedAndFilteredProducts} onClickAddToCart={onClickAddToCart}/>
    })

    onClickSignOut = () => {
        const { removeAccessToken } = authStore.authStore
        removeAccessToken()
        const { history } = this.props
        history.replace('login-page')
    }

    render() {
        const { productStore } = this.props
        const { onChangeSortBy, onSelectSize, onSubmitSearchText } = productStore
        const { getProductListAPIStatus, getProductListAPIError, totalNoOfProductsDisplayed  } = productStore

        return(
            <ProductsPageContainer>
            <SignOutButton onClick={this.onClickSignOut}>Sign Out</SignOutButton>
            <ProductCart/>
            <ProductsDashboardContainer>
                <SizeFilter onSelectSize={onSelectSize}/>
                <HeaderAndProductsListContainer>
                    <Header onChangeSortBy={onChangeSortBy} totalNoOfProductsDisplayed={totalNoOfProductsDisplayed}
                    onSubmitSearchText={onSubmitSearchText}/>
                    <LoadingWrapperWithFailure 
                        apiStatus={getProductListAPIStatus}
                        apiError={getProductListAPIError}
                        onRetryClick={this.doNetworkCalls}
                        renderSuccessUI={this.renderProductsList}
                    />
                </HeaderAndProductsListContainer>
            </ProductsDashboardContainer>
            </ProductsPageContainer>
        )
    }
}

export default ProductsPage