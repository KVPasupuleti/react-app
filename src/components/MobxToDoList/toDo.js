import React from 'react';
import mobxToDoStore from '../../stores/MobxToDoStore';

class ToDo extends React.Component {

    onChangeCheckBox = (e) => {
        this.props.toDoModel.onChangeCheckBox();
    }

    onChangeContent = (event) => {
        this.props.toDoModel.onChangeContent(event.target.value);
    }   

    onDeleteToDo = () => {
        mobxToDoStore.deleteToDo(this.props.toDoModel.id);
    }

    render() {
        const { toDoModel } = this.props;
        return (
            <div className="to-do" id={toDoModel.id}>
                <input className="check-box" type="checkbox" onChange={this.onChangeCheckBox} checked={toDoModel.isCompleted}/>
                <input onBlur={this.onChangeContent} type="text" className={toDoModel.isCompleted===true?"completed-to-do":"pending-to-do"} disabled={toDoModel.isCompleted} defaultValue = {toDoModel.title}/>
                <button className="cross-button" onClick={this.onDeleteToDo}>X</button>
            </div>
        );
    }
}

export { ToDo };
