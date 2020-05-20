import React, { Component } from 'react'
import { HOCHeader, RenderPropsHeader } from './styles'
import { EnhancedViewEditToggleRoute } from '../ViewEditToggleRoute/ViewEditToggleRoute'
import { MouseCoordinatesRoute } from '../MouseCoordinatesRoute'
import { EnhancedCollapseExpandRoute } from '../CollapseExpandRoute'
import { EnhancedDeviceTypeTextRoute } from '../DeviceTypeTextRoute'

export default class PracticeAdvancedConceptsRoute extends Component {
    render() {
        return (
            <div>
                <HOCHeader>HOC's Usage</HOCHeader>
                <EnhancedViewEditToggleRoute/>
                <EnhancedCollapseExpandRoute/>
                <EnhancedDeviceTypeTextRoute/>
                <RenderPropsHeader>Render Props Usage</RenderPropsHeader>
                <MouseCoordinatesRoute/>
            </div>
        )
    }
}