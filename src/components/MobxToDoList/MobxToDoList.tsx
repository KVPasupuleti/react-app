import React from "react";
import { observer } from 'mobx-react';

import mobxToDoStore from '../../stores/MobxToDoStore';

import { ToDo } from './toDo';
import Footer from './Footer';
import './ToDoList.css';
import Loading from './loading';
import NoData from './noData';
import Failure from './retry';
import { observable } from "mobx";

@observer
class MobxToDoList extends React.Component {

  @observable responseStatus = 0
  count = -1; 
  json = []

  componentDidMount() {
    //alert("componentDidMount Called")
    this.getToDosFromServer("https://jsonplaceholder.typicode.com/post")
  }

  getToDosFromServer = async(inputURL) => {
    //alert("fetching called")
    this.responseStatus = 0
    const response = await fetch(inputURL, {
      method: "GET", 
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }})

    this.json = await response.json()
    this.responseStatus = response.status
    if(this.responseStatus === 200)
      this.addDefaultTodosToStore()
}

  addDefaultTodosToStore = () => {
    //alert("putting called")
    this.json.forEach(eachTodo => mobxToDoStore.addNewToDo(eachTodo["title"]))
  }

  deleteToDo = (inputToDoId) => {
    mobxToDoStore.deleteToDo(inputToDoId);
  }

  handleFooter = (event) => {
    let displayToDos:Array<Object> = [];
    switch (event.target.name) {
      case 'all':
        displayToDos = mobxToDoStore.allToDos.filter(eachToDo => eachToDo);
        break;
      case 'active':
        displayToDos = mobxToDoStore.allToDos.filter(eachToDo => eachToDo.isCompleted === false);
        break;
      case 'completed':
        displayToDos = mobxToDoStore.allToDos.filter(eachToDo => eachToDo.isCompleted === true);
        break;
      case 'clearCompleted':
        displayToDos = [];
        mobxToDoStore.allToDos = mobxToDoStore.allToDos.filter(eachToDo => eachToDo.isCompleted === false);
        break;
      default:
    }

    mobxToDoStore.toDoList = displayToDos;
    mobxToDoStore.currentStatus = event.target.name;
  }

  addNewToDo = (event) => {
    event.preventDefault()
    mobxToDoStore.addNewToDo(event.target.value);     
  }

  renderToDoList = () => {
    const activeToDos = mobxToDoStore.allToDos.filter(eachToDo => eachToDo.isCompleted === false);
    mobxToDoStore.noOfItemsLeft = activeToDos.length;
    if (mobxToDoStore.allToDos.length === 0)
    mobxToDoStore.footerVisibility = false;

    const { toDoList } = mobxToDoStore;
    
    const displayToDos = toDoList.map(eachToDo => {
      this.count = this.count + 1;
      return <ToDo key={eachToDo.id} toDoModel = {mobxToDoStore.toDoList[this.count]}/>;
    });
    this.count = -1;
    return displayToDos;
  }

  renderBody = () => {
    return this.responseStatus===0?<Loading/>:this.responseStatus>=400?
      <Failure getToDosFromServer={this.getToDosFromServer}/>:this.responseStatus>=204?<NoData/>:
      this.renderToDoList()
  }

  render() {
    //alert("render Called")
        return (
      <div className="container">
            <p className="header">todos</p>
            <form className="to-do-container">
                <input type="text" placeholder="Enter new todo" className="user-input" onSubmit={this.addNewToDo}/>
                {this.renderBody()}
                <Footer handleFooter={this.handleFooter}
                noOfItemsLeft={mobxToDoStore.noOfItemsLeft}
                totalNoOfItems={mobxToDoStore.allToDos.length}
                currentStatus={mobxToDoStore.currentStatus}
                footerVisibility={mobxToDoStore.footerVisibility}/>
            </form>
        </div>
    );
  }
}

export default MobxToDoList;
