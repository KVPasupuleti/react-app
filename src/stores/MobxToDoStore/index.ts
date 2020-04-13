import { observable, action } from "mobx";

import MobxToDoModel from "../models/ToDo";


class MobxToDoStore<MobxToDoStoreVariables> {


@observable toDoList
@observable currentStatus 
    allToDos: Array<MobxToDoModel>;
    noOfItemsLeft: number;
    footerVisibility: boolean;



constructor() {
    this.toDoList = []
    this.currentStatus = "all"
    this.allToDos = []
    this.noOfItemsLeft = 0
    this.footerVisibility = false
}

@action.bound
addNewToDo(event) {
    if (event.keyCode === 13 && event.target.value !== "") {
        const { toDoList } = this;
        console.log(typeof(MobxToDoModel));
        const newToDo =  new MobxToDoModel(event.target.value);
        toDoList.push(newToDo);
        event.target.value = "";
        this.allToDos.push(newToDo);      
        this.footerVisibility = true;
    }
}

@action.bound
deleteToDo(inputToDoId) {
    const { toDoList } = this;
    const deletedToDoId = inputToDoId;
    this.toDoList = toDoList.filter(eachToDo => eachToDo.toDoId !== deletedToDoId);
    this.allToDos = this.toDoList
}

}

const mobxToDoStore = new MobxToDoStore();


export { mobxToDoStore as default, MobxToDoStore };
