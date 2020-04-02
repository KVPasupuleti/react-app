import React from 'react';
import NavBar from './NavBar';

class DisableButton extends React.Component {
    state = {
        isDisableButtonChecked: false,
        showMessage: ""
    }

    handleChange = () => {
        const message = this.state.isDisableButtonChecked ? "" : "I am disabled";
        this.setState({
            isDisableButtonChecked: !this.state.isDisableButtonChecked,
            showMessage: message
        });
    }

    handleSubmit = (e) => {
        this.setState({ showMessage: "Hi, I am enabled" });
        e.preventDefault();
    }

    displayMessage = () => {
        console.log(this.state.showMessage);
        return (
            <p>{this.state.showMessage}</p>
        );
    }

    render() {
        return (
            <div className="container">
            <NavBar title="Disable Button"/>
            <form onSubmit={this.handleSubmit}>
                <input type="checkbox" onChange={this.handleChange}/>
                <label>Disabled</label>
                <button disabled={this.state.isDisableButtonChecked}>Click Me</button>
                {this.displayMessage()}
            </form>
            </div>
        );
    }
}

export default DisableButton;
