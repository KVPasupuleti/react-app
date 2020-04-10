import React, { Component } from 'react';
import Event from '../Event';

class EventList extends Component {

    renderEvents = () => {
        return <Event/>
    }

    render() {
        console.log(1);
        return(
            <div>
                {this.renderEvents()}
            </div>
        )  
    }
}

export default EventList;