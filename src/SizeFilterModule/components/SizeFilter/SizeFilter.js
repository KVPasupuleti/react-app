import React, { Component } from 'react'
import { SizeFilterContainer, SizesText } from './styles'
import sizeFilterStore from '../../stores/SizeFilterStore/SizeFilterStore'
import SizeButton from '../SizeButton/SizeButton'
import { observer } from 'mobx-react'


@observer
class SizeFilter extends Component {

    constructor() {
        super()
        sizeFilterStore.getSizeButtons()
    }
    
    onSelectSize = (buttonObject) => {
        const { onSelectSize } = this.props
        onSelectSize(buttonObject)
    }

    renderSizeButtons = () => {
        return sizeFilterStore.sizeButtons.map(eachButton => <SizeButton eachButton={eachButton} onSelectSize={this.onSelectSize} key={Math.random()}/>)
    }

    render() {
    return (
        <SizeFilterContainer>
            <SizesText>Sizes:</SizesText>
            {this.renderSizeButtons()}
        </SizeFilterContainer>
    )
}
}

export default SizeFilter
