import React, { Component } from 'react';
import eventStore from '../../../stores/EventStore';
import Event from '../Event';
import { observer } from 'mobx-react';

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
                <div>1</div>
                <div>{this.renderEvents()}</div>
            </div>
        )  
    }
}

export default EventList;