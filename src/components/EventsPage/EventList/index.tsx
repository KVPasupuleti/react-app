import React, { Component } from 'react';
import { observer } from 'mobx-react';

import eventStore from '../../../stores/EventStore';
import Event from '../Event';


@observer
class EventList extends Component {

    renderEvents = () => {
        return eventStore.events.map(eventModel => {
            return <Event key={eventModel.id} eventModel={eventModel} onDeleteEvent={eventStore.onDeleteEvent}/>
        })
    }

    render() {
        return(
            <div>
                <div>{eventStore.noOfEvents}</div>
                <div>{this.renderEvents()}</div>
            </div>
        )  
    }
}

export default EventList;