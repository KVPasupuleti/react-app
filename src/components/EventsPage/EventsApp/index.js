import React, { Component } from 'react';
import AddEvent from '../AddEvent';
import EventList from '../EventList';
import eventStore from '../../../stores/EventStore';

class EventsApp extends Component {
    render() {
        return(
            <div>
                <div>EventsApp</div>
                <AddEvent />
                <EventList />
            </div>
        )  
    }
}

export default EventsApp;