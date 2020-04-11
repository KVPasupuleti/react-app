import React from 'react';
import mobxToDoStore from '../../stores/MobxToDoStore';

class ToDo extends React.Component {

    onChangeCheckBox = (e) => {
        //const { toDoModel } = this.props;
        //console.log(eachToDo)
        this.props.toDoModel.onChangeCheckBox();
    }

    onChangeContent = (event) => {
        this.props.toDoModel.onChangeContent(event.target.value);
    }

    onDeleteToDo = () => {
        mobxToDoStore.deleteToDo(this.props.toDoModel.toDoId);
    }

    render() {
        const { toDoModel } = this.props;
        return (
            <div className="to-do" id={toDoModel.toDoId}>
                <input className="check-box" type="checkbox" onChange={this.onChangeCheckBox} checked={toDoModel.isChecked}/>
                <input onBlur={this.onChangeContent} type="text" className={toDoModel.isChecked===true?"completed-to-do":"pending-to-do"} disabled={toDoModel.isChecked} defaultValue = {toDoModel.toDoContent}/>
                <button className="cross-button" onClick={this.onDeleteToDo}>X</button>
            </div>
        );
    }
}

export { ToDo };
