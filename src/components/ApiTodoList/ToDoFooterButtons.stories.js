import React from 'react'
import { ToDoFooterButton } from './Footer'
import { text, withKnobs, color, array } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default {
    component: ToDoFooterButton,
    title: "ToDoButtons",
    decorators: [withKnobs] 
}

export const footerButton = () => {
    const buttonName=text("ToDoButton", "ActiveButton")
    return <ToDoFooterButton onClick={action(`${buttonName} clicked`)} style={{border: "2px solid black"}}>{buttonName}</ToDoFooterButton>
}

footerButton.story = {
decorators: [storyFn => <div >{storyFn()}</div>]
}


