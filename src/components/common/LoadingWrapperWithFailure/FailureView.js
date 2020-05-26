import React from 'react'
import { observer } from 'mobx-react'

import {
  FailureViewContainer,
  FailureViewMessage,
  RetryButton,
} from './styledComponents'

@observer
class FailureView extends React.Component {

  dorababu = () => {
    const {onRetryClick} = this.props
    return onRetryClick
  }

  render() {
    const { onRetryClick, errorMessage, disabled } = this.props

    return (
      <FailureViewContainer>
        <FailureViewMessage>{errorMessage}</FailureViewMessage>
        <RetryButton onClick={this.dorababu()} disabled={disabled}>Retry</RetryButton>
      </FailureViewContainer>
    )
  }
}

export const RetryButtonComponent = (props) => {
  const { onClick, children, disabled } = props
  return <RetryButton onClick={onClick} disabled={disabled}>{children}</RetryButton>
}

export default FailureView
