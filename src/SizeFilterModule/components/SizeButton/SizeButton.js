import React, { Component } from 'react';
import { SizeButtonStyles } from './styles';
import { observer } from 'mobx-react';

@observer
class SizeButton extends Component {

    onSelectSize = () => {
        const { eachButton, onSelectSize } = this.props
        eachButton.onClickSizeButton()
        onSelectSize(eachButton)
    }

    render() {
        const { eachButton } = this.props
        const { isSelected } = eachButton
        return(
        <SizeButtonStyles onClick={this.onSelectSize} isSelected={isSelected}>{eachButton.name}</SizeButtonStyles>
        )
    }
}

export default SizeButton