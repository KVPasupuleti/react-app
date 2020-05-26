import React from 'react'
import { CustomDiv } from '.'
import { withKnobs, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react';

export default {
    component: CustomDiv,
    title: "CustomDiv",
    decorators : [withKnobs]
}


export const customDiv = () => {
    const name = text("Name", "Kaywee")
    const place = text("Place", "Kurnool")
    const content = `I am ${name} from ${place}`

return <CustomDiv>{content}</CustomDiv>
}
