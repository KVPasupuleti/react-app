import React from 'react'
import NoDataView from '.'
import { text, withKnobs } from '@storybook/addon-knobs'

export default {
    component: NoDataView,
    title: 'common/NoDataView',
    decorators: [withKnobs]
}

export const noDataView = () => <NoDataView textMsg={text("Message", "Data is not available")}/>