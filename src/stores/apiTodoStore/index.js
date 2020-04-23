import { observable, action, toJS, computed } from "mobx";

import MobxToDoModel from "../models/ToDo";
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

class ApiTodoStore {

@observable toDoList
@observable currentStatus 
@observable getTodosApiStatus
@observable getTodosErrorStatus
@observable todos
todoService

constructor(todoService) {
    this.init()
    this.todoService = todoService
    this.toDoList = []
    this.currentStatus = "all"
    this.allToDos = []
    this.footerVisibility = false
}

@action.bound
init() {
    this.getTodosApiStatus = API_INITIAL
    this.getTodosErrorStatus = null
    this.todos = []
}

@action.bound
addNewToDo(todoObject) {
        const { toDoList } = this;
        const newToDo =  new MobxToDoModel(todoObject);
        toDoList.push(newToDo);
        this.allToDos.push(newToDo);      
        this.footerVisibility = true;
        console.log("alltodos", this.allToDos)
}

@action.bound
deleteToDo(inputToDoId) {
    const { toDoList } = this;
    const deletedToDoId = inputToDoId;
    this.toDoList = toDoList.filter(eachToDo => eachToDo.id !== deletedToDoId);
    this.allToDos = this.toDoList
}

@computed
get noOfItemsLeft() {
    const activeTodos = this.toDoList.filter(eachToDo => eachToDo.isCompleted === false)
    console.log("comp called", activeTodos.length)
    return activeTodos.length
}

@action.bound
setTodosApiStatus(apiStatus) {
    this.getTodosApiStatus = apiStatus
}

@action.bound
setTodosErrorStatus(error) {
    this.getTodosErrorStatus = error
}

@action.bound
setTodosResponse(todosResponse) {
    this.todos = todosResponse
}

@action.bound
getUsersApi() {
    const todosPromise = this.todoService.getTodosApi() 
    return bindPromiseWithOnSuccess(todosPromise)
    .to(this.setTodosApiStatus, this.setTodosResponse)
    .catch(this.setTodosErrorStatus)
}

clearStore() {
    this.init()
}

}

export default ApiTodoStore

