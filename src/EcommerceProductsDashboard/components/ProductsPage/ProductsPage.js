import React, { Component } from "react";
import { ProductList } from "../ProductList";
import { Header } from "../Header";
import { SizeFilter } from "../../../SizeFilterModule/components/SizeFilter";
import { inject, observer } from "mobx-react";
import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperWithFailure";
import { ProductCart } from "../../../ShoppingCart/components/ProductCart";
import authStore from '../../../common/stores'
import { ProductsPageContainer, ProductsDashboardContainer, HeaderAndProductsListContainer, SignOutButton } from "./styles";
import { withRouter } from "react-router-dom";
import { Pagination } from "../../../common/components/Pagination";
import { observable } from "mobx";

@inject('productStore', 'cartStore', 'authStore')
@observer
class ProductsPage extends Component {
    @observable windowHeight = window.innerHeight
    hello = this.props.productStore
    itemsLimit = Math.floor(window.innerHeight/250)

    componentDidMount() {
        this.doNetworkCalls()
    }

    doNetworkCalls = () => {
        const { productStore } = this.props
        productStore.getProductList(this.itemsLimit, 0)
    }

    setItemsLimit = () => {
        this.itemsLimit = Math.floor(window.innerHeight/250)
        this.windowHeight = window.innerHeight
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
        window.addEventListener("resize", this.setItemsLimit)
        console.log("Height", window.innerHeight, "Width", window.innerWidth)
        const { productStore } = this.props
        const { onChangeSortBy, onSelectSize, onSubmitSearchText, goToNextPage, goToPreviousPage } = productStore
        const { getProductListAPIStatus, getProductListAPIError, 
            totalNoOfProductsDisplayed, offsetInput,
            totalProducts, pageNumber} = productStore
            console.log("totalProducts", totalProducts)
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
            <Pagination totalProducts={totalProducts}
                itemsLimit={this.itemsLimit} pageNumber={pageNumber} goToNextPage={goToNextPage} 
                goToPreviousPage={goToPreviousPage}/>
            </ProductsPageContainer>
        )
    }
}

export default withRouter(ProductsPage)