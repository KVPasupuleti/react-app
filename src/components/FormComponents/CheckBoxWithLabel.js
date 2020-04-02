import React from 'react';

class CheckboxWithLabel extends React.Component {
    state = {
        isChecked: true
    }

    handleCheckboxClick = () => {
        this.setState({ isChecked: !this.state.isChecked });
        this.props.handleCheckboxClick(this.props.label, this.state.isChecked);
    }

    render() {
        return (
            <div>
            <input type="checkbox" onChange={this.handleCheckboxClick}/>
            <label>{this.props.label}</label>
            </div>
        );
    }
}

export default CheckboxWithLabel;
