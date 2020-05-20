import React, { Component } from 'react'
import withScreenSizeDetectors from '../../hocs/withScreenSizeDetectors'
import { DeviceTypeText } from '../../components/DeviceTypeText'

class DeviceTypeTextRoute extends Component {
    render() {
        const { isMobile, isTablet, isDesktop } = this.props
        return (
            <DeviceTypeText
            isMobile={isMobile}
            isTablet={isTablet}
            isDesktop={isDesktop}
            />
        )
    }
}

const EnhancedDeviceTypeTextRoute = withScreenSizeDetectors(DeviceTypeTextRoute)

export { EnhancedDeviceTypeTextRoute }
