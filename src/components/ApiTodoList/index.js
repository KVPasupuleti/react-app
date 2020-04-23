import React from "react";
import { observer, inject } from 'mobx-react';
import { toJS } from "mobx";

import { ToDo } from './Todo';
import Footer from './Footer';
import '../MobxToDoList/ToDoList.css';
import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure";
import NoDataView from '../common/NoDataView';


@inject('apiTodoStore')
@observer
class ApiTodoApp extends React.Component {

count = -1; 

componentDidMount() {
    this.doNetworkCalls()
}

doNetworkCalls = () => {
    this.getTodoStore().getUsersApi()
}

getTodoStore = () => {
    return this.props.apiTodoStore
}

deleteToDo = (inputToDoId) => {
    this.getTodoStore().deleteToDo(inputToDoId);
}

handleFooter = (event) => {
    let displayToDos = []
    switch (event.target.name) {
    case 'all':
        displayToDos = this.getTodoStore().allToDos.filter(eachToDo => eachToDo);
        break;
    case 'active':
        displayToDos = this.getTodoStore().allToDos.filter(eachToDo => eachToDo.isCompleted === false);
        break;
    case 'completed':
        displayToDos = this.getTodoStore().allToDos.filter(eachToDo => eachToDo.isCompleted === true);
        break;
    case 'clearCompleted':
        displayToDos = [];
        this.getTodoStore().allToDos = this.getTodoStore().allToDos.filter(eachToDo => eachToDo.isCompleted === false);
        break;
    default:
    }

    this.getTodoStore().toDoList = displayToDos;
    this.getTodoStore().currentStatus = event.target.name;
}

addNewToDo = (event) => {
    if(event.keyCode === 13)
    {
        const todoObject = {
            title: event.target.value,
            isCompleted: false
        }
        this.getTodoStore().addNewToDo(todoObject);    
        event.target.value = "" 
    }
}

renderTodoList = () => {
    if (this.getTodoStore().allToDos.length === 0)
    this.getTodoStore().footerVisibility = false;

    const { toDoList } = this.getTodoStore();
    
    const displayToDos = toDoList.map(eachToDo => {
    this.count = this.count + 1;
    return <ToDo key={eachToDo.id} toDoModel = {this.getTodoStore().toDoList[this.count]} deleteToDo={this.deleteToDo}/>;
    });
    this.count = -1;
    return displayToDos;
}

renderDefaultTodos = () => {
    const { todos } = this.getTodoStore()
    if(toJS(todos).length === 0)
        return <NoDataView/>
    return todos.map(eachTodo => this.getTodoStore().addNewToDo(eachTodo))
}

render() {
    const { getTodosApiStatus, getTodosErrorStatus, noOfItemsLeft, currentStatus, footerVisibility } = this.getTodoStore()
    return (
        <div className="container">
            <p className="header">todos</p>
            <div className="to-do-container">
                <input type="text" placeholder="Enter new todo" className="user-input" onKeyDown={this.addNewToDo}/>
                <LoadingWrapperWithFailure
                apiStatus={getTodosApiStatus}
                apiError={getTodosErrorStatus}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderDefaultTodos}
                />
                {this.renderTodoList()}
                <Footer handleFooter={this.handleFooter}
                noOfItemsLeft={noOfItemsLeft}
                totalNoOfItems={this.getTodoStore().allToDos.length}
                currentStatus={currentStatus}
                footerVisibility={footerVisibility}/>
            </div>
        </div>
    );
}
}

export default ApiTodoApp;