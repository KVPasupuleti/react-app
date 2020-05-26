import React, { Component } from 'react'
import { PaginationContainer, PreviousPageButton, PageNumberContainer, CurrentPageNumber, PageNumberSeperator, TotalPages, NextPageButton } from './/styles'

export class Pagination extends Component {

    goToNextPage = () => {
        const { goToNextPage, itemsLimit } = this.props
        goToNextPage(itemsLimit)
    }

    goToPreviousPage = () => {
        const { goToPreviousPage, itemsLimit } = this.props
        goToPreviousPage(itemsLimit)
    }

    render() {
        const { itemsLimit, totalProducts, pageNumber } = this.props
        if(totalProducts===undefined)
            return <div></div>
        return (
            <PaginationContainer>
                <PreviousPageButton disabled={pageNumber===1?true:false} 
                onClick={this.goToPreviousPage}>{'<'}</PreviousPageButton>
                <PageNumberContainer>
                    <CurrentPageNumber>
                        {pageNumber}
                    </CurrentPageNumber>
                    <PageNumberSeperator>
                        /
                    </PageNumberSeperator>
                    <TotalPages>
                        {Math.ceil(totalProducts/itemsLimit)}
                    </TotalPages>
                </PageNumberContainer>
                <NextPageButton disabled={pageNumber===Math.ceil(totalProducts/itemsLimit)?true:false}
                onClick={this.goToNextPage}>{'>'}</NextPageButton>
            </PaginationContainer>
        )
    }
}
