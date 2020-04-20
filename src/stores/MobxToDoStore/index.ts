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
addNewToDo(value) {
    //if (event.keyCode === 13 && event.target.value !== "") {
        const { toDoList } = this;
        const newToDo =  new MobxToDoModel(value);
        toDoList.push(newToDo);
        value = "";
        this.allToDos.push(newToDo);      
        this.footerVisibility = true;
   // }
}

@action.bound
deleteToDo(inputToDoId) {
    const { toDoList } = this;
    const deletedToDoId = inputToDoId;
    this.toDoList = toDoList.filter(eachToDo => eachToDo.id !== deletedToDoId);
    this.allToDos = this.toDoList
}

}

const mobxToDoStore = new MobxToDoStore();


export { mobxToDoStore as default, MobxToDoStore };
