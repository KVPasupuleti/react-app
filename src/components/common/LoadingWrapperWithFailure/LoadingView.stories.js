import React from 'react'
import { withKnobs, color, object, number, boolean } from '@storybook/addon-knobs'
import Loader from '../Icons/Loader/SvgFile'
import { action } from '@storybook/addon-actions'
import LoadingWrapperWithFailure from '.'
import { RetryButtonComponent } from './FailureView'

export default {
    component: LoadingWrapperWithFailure,
    title: "common/LoadingWrapperWithFailure",
    decorators: [withKnobs]
}

export const loader = () => {
    return <Loader fill={color("LoadingViewColor", "cyan")} width={number("Width", 100)}/>
}

export const retryButton = () => {
    return <RetryButtonComponent onClick={action("Retry button clicked")} >Retry Loading</RetryButtonComponent>
}

const styleObj = {
    display: "flex", 
    justifyContent: "center"
}

loader.story = {
decorators: [storyFn => <div style={styleObj}>{storyFn()}</div>]
}
