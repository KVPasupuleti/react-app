import { observable, action, reaction, isComputed } from "mobx";
import MobxToDoModel from "../models/ToDo";
import { observer } from "mobx-react";


class MobxToDoStore {

@observable toDoList
@observable currentStatus 

constructor() {
    this.toDoList = []
    this.currentStatus = "all"
    this.allToDos = []
    this.noOfItemsLeft = 0
    this.footerVisibility = false
}


/*
const newTodo = {
    toDoId: 
    toDotITLE:
    isCompleted: 
}

todos.push(newToDo);
*/


//const newToDo = new ToDo

@action.bound
addNewToDo(event) {
    if (event.keyCode === 13 && event.target.value !== "") {
        const { toDoList } = this;
        console.log(typeof(MobxToDoModel));
        const newToDo =  new MobxToDoModel(event.target.value);
        this.toDoList.push(newToDo);
        event.target.value = "";
        this.allToDos.push(newToDo);      
        this.footerVisibility = true;
    }
}

//toDosAddReaction = reaction(() => this.toDoList.map(toDoModel => toDoModel.isChecked) , (isCheckedArray) => console.log(isCheckedArray))



@action.bound
deleteToDo(inputToDoId) {
    const { toDoList } = this;
    const deletedToDoId = inputToDoId;
    this.toDoList = toDoList.filter(eachToDo => eachToDo.toDoId !== deletedToDoId);
    this.allToDos = this.toDoList
}

}

const mobxToDoStore = new MobxToDoStore();

export default mobxToDoStore;
