import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import { EventContainer, EventNameInput, EventLocationInput, EditEventButton, DeleteEventButton, UpdateEventButton } from './eventStyles';
import EventModel from '../../../stores/models/Event';

type EventProps = {
    onDeleteEvent: Function,
    eventModel: EventModel
}

@observer
class Event extends Component<EventProps> {

    @observable isEditEvent
    @observable eventName
    @observable eventLocation

    constructor(props) {
        super(props)
        this.isEditEvent = false
        this.eventName = ""
        this.eventLocation = ""
    }

    onDeleteEvent = (e) => {
        const { onDeleteEvent } = this.props
        onDeleteEvent(e.target.id);
    }

    onChangeEventName = (e) => {
        this.eventName = e.target.value
    }

    onChangeEventLocation = (e) => {
        this.eventLocation = e.target.value
    }

    onUpdateEventDetails = () => {
        const { eventModel } = this.props
        const updatedEventObject = {
            name : this.eventName,
            location : this.eventLocation
        }
        eventModel.onUpdateEventDetails(updatedEventObject);
        this.isEditEvent = !this.isEditEvent
    }

    onEditEvent = () => {
        this.isEditEvent = !this.isEditEvent
    }

    renderEventButtons = () => {
        if(this.isEditEvent === true) { 
            return(<UpdateEventButton onClick={this.onUpdateEventDetails}>Update</UpdateEventButton>)
        }
        else
            return (
            <div>
            <EditEventButton onClick={this.onEditEvent}>Edit Event</EditEventButton>
            <DeleteEventButton>Delete Event</DeleteEventButton>
            </div>)
    }

    render() {
        const { eventModel } = this.props
        return(
            <EventContainer>
                <EventNameInput value={eventModel.name} onChange={this.onChangeEventName}/>
                <EventLocationInput value={eventModel.location} onChange={this.onChangeEventLocation}/>
                <div>{this.renderEventButtons()}</div>
            </EventContainer>
        )  
    }
}

export default Event;