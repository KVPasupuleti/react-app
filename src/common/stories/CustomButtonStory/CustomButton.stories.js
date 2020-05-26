import React from 'react';
import { CustomButton } from '../../components/CustomButton';
import { action } from '@storybook/addon-actions';
import { addDecorator } from '@storybook/react';
import { withKnobs, boolean, button, text } from '@storybook/addon-knobs'

// addDecorator(storyFn => <div style={{backgroundColor: "red"}}>{storyFn()}</div>)

export default {
    component: CustomButton,
    title: 'Buttons',
    // decorators: [storyFn => <div style={{display:"flex", justifyContent: "center"}}>{storyFn()}</div>, withKnobs]
};

export const customButton = () => 
<CustomButton 
onClick={action("Button Clicked")}
disabled={boolean("Disabled", false)}
/>;


customButton.story = {
    decorators: [storyFn => <div style={{border: "2px solid pink"}}>{storyFn()}</div>]
}

export const specialCustomButton = () => <CustomButton style={{border: "2px solid orange"}}/>

specialCustomButton.story = {
    decorators: [storyFn => <div style={{border: "2px solid orange"}}>{storyFn()}</div>]
};