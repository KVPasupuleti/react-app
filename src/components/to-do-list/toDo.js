import React from 'react';

class ToDo extends React.Component {

    onChangeCheckBox = () => {
        this.props.onChangeCheckBox(this.props.eachToDo.toDoId);
    }

    onChangeContent = (event) => {
        console.log(event);
        this.props.onChangeContent(this.props.eachToDo.toDoId, event.target.value);
    }

    onDeleteToDo = () => {
        this.props.deleteToDo(this.props.eachToDo.toDoId);
    }

    render() {
        const { eachToDo } = this.props;
        return (
            <div className="to-do" id={eachToDo.toDoId}>
                <input className="check-box" type="checkbox" onChange={this.onChangeCheckBox} checked={eachToDo.isChecked}/>
                <input onBlur={this.onChangeContent} type="text" className={eachToDo.isChecked===true?"completed-to-do":"pending-to-do"} disabled={eachToDo.isChecked} defaultValue = {eachToDo.toDoContent}/>
                <button className="cross-button" onClick={this.onDeleteToDo}>X</button>
            </div>
        );
    }
}

export { ToDo };
