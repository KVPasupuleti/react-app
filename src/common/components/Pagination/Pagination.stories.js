import React from 'react'
import { Pagination } from './Pagination'
import { withKnobs } from '@storybook/addon-knobs'

export default {
    component: Pagination,
    title: 'Pagination',
    decorators: [withKnobs]
}

export const pagination = () => {
    return <Pagination/>
}