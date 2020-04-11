import EventModel from '../models/Event';
import { computed, observable, action } from 'mobx';
import { observer } from 'mobx-react';


class EventStore {

    @observable events

    constructor() {
        this.events = []
    }

    onAddEvent(eventObject) {
        const newEvent = new EventModel(eventObject);
        this.events.push(newEvent);
    }

    @action.bound
    onDeleteEvent(eventObject) {
        const eventToBeDeleted = this.events.filter(event => event.id === eventObject.id)
        this.events.slice(eventToBeDeleted, 0);
    }

    @computed
    get noOfEvents() {
        return this.events.length
    }
}

const eventStore = new EventStore()

export default eventStore