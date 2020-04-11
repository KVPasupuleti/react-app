import React, { Component } from 'react';
import { AddEventContainer, EventNameInput, EventLocationInput, AddEventButton } from './addEventStyles.js';
import eventStore from '../../../stores/EventStore';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
class AddEvent extends Component {

    @observable eventName
    @observable eventLocation

    constructor() {
        super()
        this.eventName = ""
        this.eventLocation = ""
    }

    @action.bound
    onAddEvent = (e) => {
        e.preventDefault()
        const eventObject = {
            name : this.eventName,
            location: this.eventLocation
        }
        eventStore.onAddEvent(eventObject);
        this.eventName = ""
        this.eventLocation = ""
    }

    @action.bound
    onChangeEventName = (e) => {
        this.eventName = e.target.value;
    }

    @action.bound
    onChangeEventLocation = (e) => {
        this.eventLocation = e.target.value;
    }

    render() {
        return(
            <AddEventContainer onSubmit={this.onAddEvent}>
                <EventNameInput value={this.eventName} onChange={this.onChangeEventName}/>
                <EventLocationInput value={this.eventLocation} onChange={this.onChangeEventLocation}/>
                <AddEventButton>Add Event</AddEventButton>
            </AddEventContainer>
        )  
    }
}

export default AddEvent;