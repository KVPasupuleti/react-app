import React from 'react'
import GridMemoryGame from '.'
import { ThemeButtonComponent } from './Header'
import { action } from '@storybook/addon-actions'
import { boolean, withKnobs, object } from '@storybook/addon-knobs'

export default {
    component: GridMemoryGame,
    title: "GridMemoryGameButtons",
    decorators: [withKnobs]
}

export const themeButton = () => 
<ThemeButtonComponent 
disabled={boolean("TB Disabled", true)}
onClick={action("Theme Button clicked")}
>GridMemoryGame ThemeButton
</ThemeButtonComponent>