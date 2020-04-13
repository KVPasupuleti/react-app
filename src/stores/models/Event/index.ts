import { observable, action } from 'mobx';

class EventModel {

    @observable name
    @observable location

    constructor(eventObject) {
        this.id = Math.floor(Math.random() * 10000)
        this.name = eventObject.name
        this.location = eventObject.location
    }

    @action.bound
    onUpdateEventDetails(updatedEventObject) {
        this.name = updatedEventObject.name
        this.location = updatedEventObject.location
    }
}

export default EventModel;