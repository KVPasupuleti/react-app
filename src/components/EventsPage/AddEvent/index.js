import React, { Component } from 'react';
import { AddEventContainer, EventNameInput, EventLocationInput, AddEventButton } from './addEventStyles.js';
import EventList from '../Event';
import { observable } from 'mobx';
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

    onAddEvent = (e) => {
        e.preventDefault()
        console.log("new Event Added", "previous event name:", this.eventName)
        this.eventName = ""
        this.eventLocation = ""
    }

    onChangeEventName = (e) => {
        this.eventName = e.target.value;
    }

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