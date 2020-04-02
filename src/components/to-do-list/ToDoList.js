import React from "react";
import { ToDo } from './toDo';
import Footer from './Footer';
import './ToDoList.css';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      currentStatus: "all",
    };
  }

  newToDoId = 0;
  allToDos = [];
  noOfItemsLeft = 0;
  footerVisibility = false;

  onChangeCheckBox = (inputToDoId) => {
    const { toDoList } = this.state;
    const duplicateToDos = toDoList.slice(0);
    const completedToDoId = inputToDoId;
    duplicateToDos.forEach(eachToDo => {
      if (eachToDo.toDoId === completedToDoId)
        eachToDo.isChecked = !(eachToDo.isChecked);
    });
    this.setState({ toDoList: duplicateToDos });
  }

  onChangeContent = (inputToDoId, updatedToDoContent) => {
    const { toDoList } = this.state;
    const duplicateToDos = toDoList.slice(0);
    const changedToDoId = inputToDoId;
    duplicateToDos.forEach(eachToDo => {
      if (eachToDo.toDoId === changedToDoId)
        eachToDo.toDoContent = updatedToDoContent;
    });
    this.setState({ toDoList: duplicateToDos });
  }

  deleteToDo = (inputToDoId) => {
    const { toDoList } = this.state;
    const deletedToDoId = inputToDoId;
    const duplicateToDos = toDoList.filter(eachToDo => eachToDo.toDoId !== deletedToDoId);
    this.allToDos = duplicateToDos.slice(0);
    this.setState({ toDoList: duplicateToDos });
  }

  handleFooter = (event) => {
    let displayToDos = [];
    switch (event.target.name) {
      case 'all':
        displayToDos = this.allToDos.filter(eachToDo => eachToDo);
        break;
      case 'active':
        displayToDos = this.allToDos.filter(eachToDo => eachToDo.isChecked === false);
        break;
      case 'completed':
        displayToDos = this.allToDos.filter(eachToDo => eachToDo.isChecked === true);
        break;
      case 'clearCompleted':
        displayToDos = [];
        this.allToDos = this.allToDos.filter(eachToDo => eachToDo.isChecked === false);
        break;
      default:
    }
    this.setState({ toDoList: displayToDos, currentStatus: event.target.name });
  }

  addNewToDo = (event) => {
    if (event.keyCode === 13 && event.target.value !== "") {
      const { toDoList } = this.state;
      const duplicateToDos = toDoList.slice(0);
      const newToDo = {
        toDoId: this.newToDoId,
        toDoContent: event.target.value,
        isChecked: false
      };
      duplicateToDos.push(newToDo);
      this.setState({ toDoList: duplicateToDos });
      event.target.value = "";
      this.newToDoId += 1;
      this.allToDos.push(newToDo);
    }
    this.footerVisibility = true;
  }

  renderToDoList = () => {
    const activeToDos = this.allToDos.filter(eachToDo => eachToDo.isChecked === false);
    this.noOfItemsLeft = activeToDos.length;
    if (this.allToDos.length === 0)
      this.footerVisibility = false;

    const { toDoList } = this.state;
    const displayToDos = toDoList.map(eachToDo => {
      return <ToDo eachToDo={eachToDo} key={eachToDo.toDoId}
      onChangeCheckBox={this.onChangeCheckBox}
      deleteToDo={this.deleteToDo} onChangeContent={this.onChangeContent}/>;
    });
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
                noOfItemsLeft={this.noOfItemsLeft}
                totalNoOfItems={this.allToDos.length}
                currentStatus={this.state.currentStatus}
                footerVisibility={this.footerVisibility}/>
                
            </div>
        </div>
    );
  }
}

export default ToDoList;
