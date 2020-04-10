import React, { Component } from 'react';
import { EventContainer, EventNameInput, EventLocationInput, EditEventButton, DeleteEventButton } from './eventStyles.js';


class Event extends Component {
    render() {
        return(
            <EventContainer>
                <EventNameInput/>
                <EventLocationInput/>
                <EditEventButton>Add Event</EditEventButton>
                <DeleteEventButton>Delete Event</DeleteEventButton>
            </EventContainer>
        )  
    }
}

export default Event;