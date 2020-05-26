import React from 'react';
import AddEvent, { AddEventButtonComponent } from '../AddEvent';
import { action } from '@storybook/addon-actions';
import { EditEventButtonComponent, DeleteEventButtonComponent } from '../Event';
import { button, boolean, text, withKnobs } from '@storybook/addon-knobs';
import { clearDecorators } from '@storybook/react/dist/client/preview';

export default {
    component: AddEvent,
    title: "EventsAppButtons",
    decorators: [withKnobs]
}


export const addEventButton = () => {

    const content = `Add ${text("MyButtonName", "ME")}`

    const label = 'Alert1';
    const handler = () => alert(1);
    // const groupId = 'GROUP-ID1';

    button(label, handler);


    return <AddEventButtonComponent 
    onClickAddEvent={action("Event Added")}
    >{content}
    </AddEventButtonComponent>
}

export const editEventButton = () => 
    <EditEventButtonComponent 
    disabled={boolean("Disabled", false)}
    onClick={action("Event Edited")}
    >Edit My Event
    </EditEventButtonComponent>

export const deleteEventButton = () => 
    <DeleteEventButtonComponent
    onClick={action("Event Deleted")}
    >Delete My Event
    </DeleteEventButtonComponent>