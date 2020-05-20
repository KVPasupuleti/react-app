import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { DeviceTypeTextContainer, Header, DeviceTypeTextEl } from './styles'

@observer
class DeviceTypeText extends Component {
    render() {
        const { isMobile, isTablet, isDesktop } = this.props
        return (
            <DeviceTypeTextContainer>
                <Header>DeviceTypeText</Header>
                <DeviceTypeTextEl>Device Type: {isMobile()?"Mobile":isTablet()?"Tablet":isDesktop()?"Desktop":"Unknown Device"}</DeviceTypeTextEl>
            </DeviceTypeTextContainer>
        )
    }
}

export { DeviceTypeText }