import React from "react";
import { action } from 'mobx';
import { observer } from 'mobx-react';

import mobxToDoStore from '../../stores/MobxToDoStore';

import { ToDo } from './toDo';
import Footer from './Footer';
import './ToDoList.css';


@observer
class MobxToDoList extends React.Component {
  
  
  @action.bound
  onChangeCheckBox() {
      mobxToDoStore.onChangeCheckBox();
  }

  @action.bound
  onChangeContent() {
      mobxToDoStore.onChangeContent();
  }
  
  count = -1;


  deleteToDo = (inputToDoId) => {
    mobxToDoStore.deleteToDo(inputToDoId);
  }

  handleFooter = (event) => {
    let displayToDos = [];
    switch (event.target.name) {
      case 'all':
        displayToDos = mobxToDoStore.allToDos.filter(eachToDo => eachToDo);
        break;
      case 'active':
        displayToDos = mobxToDoStore.allToDos.filter(eachToDo => eachToDo.isChecked === false);
        break;
      case 'completed':
        displayToDos = mobxToDoStore.allToDos.filter(eachToDo => eachToDo.isChecked === true);
        break;
      case 'clearCompleted':
        displayToDos = [];
        mobxToDoStore.allToDos = mobxToDoStore.allToDos.filter(eachToDo => eachToDo.isChecked === false);
        break;
      default:
    }

    mobxToDoStore.toDoList = displayToDos;
    mobxToDoStore.currentStatus = event.target.name;
  }

  addNewToDo = (event) => {
    mobxToDoStore.addNewToDo(event);     
  }



  renderToDoList = () => {
    const activeToDos = mobxToDoStore.allToDos.filter(eachToDo => eachToDo.isChecked === false);
    mobxToDoStore.noOfItemsLeft = activeToDos.length;
    if (mobxToDoStore.allToDos.length === 0)
    mobxToDoStore.footerVisibility = false;

    const { toDoList } = mobxToDoStore;
    
    const displayToDos = toDoList.map(eachToDo => {
      this.count = this.count + 1;
      return <ToDo key={eachToDo.toDoId} toDoModel = {mobxToDoStore.toDoList[this.count]}/>;
    });
    this.count = -1;
    return displayToDos;
  }

  render() {
        return (
      <div className="container">
            <p className="header">todos</p>
            <div className="to-do-container">
                <input type="text" placeholder="Enter new todo" className="user-input" onKeyDown={this.addNewToDo}/>
                {this.renderToDoList()}
                
                <Footer handleFooter={this.handleFooter}
                noOfItemsLeft={mobxToDoStore.noOfItemsLeft}
                totalNoOfItems={mobxToDoStore.allToDos.length}
                currentStatus={mobxToDoStore.currentStatus}
                footerVisibility={mobxToDoStore.footerVisibility}/>
                
            </div>
        </div>
    );
  }
}

export default MobxToDoList;
