import React from 'react'
import SignInPage, { InputTagComponent } from './SignInPage'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default {
    component: SignInPage,
    title: "SignInPage",
    decorators: [withKnobs]
}


export const inputTag = () => {
    const type = text("InputType", "text")
const placeholder = text("Placeholder", "Enter Username")
const value = text("InputValue", "KrishnaVamsi")
const onChange = action("changing Username")
const stylesObj = {
    margin: "10px", 
    border: "2px solid grey", 
    borderRadius: "2px"
}
    return <InputTagComponent type={type} placeholder={placeholder} value={value} onChange={onChange} style={stylesObj}/>
}