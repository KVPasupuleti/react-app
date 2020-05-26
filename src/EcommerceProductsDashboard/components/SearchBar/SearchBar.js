import React, { Component } from 'react'
import { ProductSearchBar } from './styles'
import { observer } from 'mobx-react'
import { action } from 'mobx'

@observer
class SearchBar extends Component {

    @action.bound
    onSubmitSearchText(event) {
        const { onSubmitSearchText } = this.props
        if(event.keyCode === 13) {
            onSubmitSearchText(event.target.value)
        }
    }

    render() {
        return (
            <ProductSearchBar onKeyDown={this.onSubmitSearchText} placeholder="Search product"/>
        )
    }
}

export default SearchBar
