import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import FailureView from './FailureView'

export default {
   component: FailureView,
   title: 'Common/FailureView'
}

export const defaultView = () => <FailureView />

export const withOnRetryAndErrorMessageProp = () => (
   <FailureView
      onRetryClick={action('Dorababu clicked')}
      errorMessage={'Failed'}
   />
)

export const knobs = () => (
   <FailureView
      disabled={boolean("Disable Retry Button", false)}
      errorMessage={text('errorMessage', 'failed message')}
      onRetryClick={action('Dorababu clicked')}
   />
)

knobs.story = {
   decorators: [withKnobs]
}